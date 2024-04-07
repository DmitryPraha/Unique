export default function ContactPage() {
    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const body = JSON.stringify(Object.fromEntries(formData));

        try {
            const response = await fetch('http://localhost:4000/tracks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body,
            });

            if (response.ok) {
                // Handle success
                alert('Form successfully submitted!');
            } else {
                throw new Error('Form submission failed!');
            }
        } catch (error) {
            // Handle error
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="domain" required />
            <input type="text" name="password" required />
            <textarea name="message" required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}
