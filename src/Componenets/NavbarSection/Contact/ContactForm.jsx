
import  { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useToast } from '../../../Hooks/Use-toast';
import SuccessMsg from './SuccessMsg';

const ContactForm = () => {
    const { toast } = useToast();
    const [status, setStatus] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Subject: '',
        Message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (!formData.Name.trim() || !formData.Email.trim()) {
                toast({
                    title: "Error! Something went wrong",
                    description: "Please enter a Name or Email address",
                    variant: "destructive"
                });
                return;
            }
            
            const form = new FormData();
            const currentDateTime = new Date().toLocaleString();
            form.append('Name', formData.Name);
            form.append('Email', formData.Email);
            form.append('Subject', formData.Subject);
            form.append('Message', formData.Message);
            form.append('DateTime', currentDateTime);

            const response = await fetch('https://getform.io/f/bjjjgdkb', {
                method: 'POST',
                body: form,
            });

            if (response.ok) {
                setSuccess(true);
                setStatus('Message submitted successfully');
                setFormData({
                    Name: '',
                    Email: '',
                    Subject: '',
                    Message: '',
                });
            } else {
                setStatus('Error! Something went wrong');
            }
        } catch (error) {
            console.error("Data submitting Error", error);
            setStatus('Error! Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {success ? (
                <SuccessMsg status={status} />
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="d-flex flex-wrap align-items-center mb-3" style={{ gap: '5px' }}>
                        <Form.Control
                            value={formData.Name}
                            onChange={handleChange}
                            style={{ flex: '1', margin: '5px 0', borderRadius: '0', border: '1px solid black', height: '60px' }}
                            type="text"
                            name="Name"
                            placeholder="Your Name"
                            required
                            disabled={loading}
                        />
                        <Form.Control
                            value={formData.Email}
                            onChange={handleChange}
                            style={{ flex: '1', margin: '5px 0', borderRadius: '0', border: '1px solid black', height: '60px' }}
                            type="email"
                            name="Email"
                            placeholder="Email"
                            required
                            disabled={loading}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            value={formData.Subject}
                            onChange={handleChange}
                            style={{ borderRadius: '0', border: '1px solid black', color: 'black', height: '60px' }}
                            type="text"
                            name="Subject"
                            placeholder="Subject"
                            disabled={loading}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            value={formData.Message}
                            onChange={handleChange}
                            style={{ borderRadius: '0', border: '1px solid black', color: 'black', height: '150px' }}
                            as="textarea"
                            rows={3}
                            name="Message"
                            placeholder="Message"
                            disabled={loading}
                        />
                    </Form.Group>
                    <button
                        type="submit"
                        className="w-full bg-[#fbb552] hover:bg-orange-500 text-white font-bold py-3 rounded-lg text-lg"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Send Message"}
                    </button>
                </Form>
            )}
        </div>
    );
};

export default ContactForm;



