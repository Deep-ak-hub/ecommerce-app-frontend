import { useNavigate } from 'react-router-dom';

interface IErrorPageProps {
    code: number;
    message: string;
    redirect?: string;
}

export default function ErrorPage({ code, message, redirect }: Readonly<IErrorPageProps>) {
    const navigate = useNavigate();

    const handleRedirect = () => {
        if (redirect) {
            navigate(redirect);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
                <div className="text-6xl font-bold text-blue-500 mb-2">{code}</div>
                <h1 className="text-2xl font-semibold mb-4">Page Not Found</h1>
                <p className="text-gray-600 mb-6">{message}</p>
                {redirect && (
                    <button
                        onClick={handleRedirect}
                        className="mt-2 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
                    >
                        Go Back
                    </button>
                )}
            </div>
        </div>
    );
}