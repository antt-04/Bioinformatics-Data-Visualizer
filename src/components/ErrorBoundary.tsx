import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 text-red-600">
                    <h1 className="text-2xl font-bold">Something went wrong.</h1>
                    <pre className="mt-4 bg-gray-100 p-4 rounded text-sm overflow-auto">
                        {this.state.error?.message}
                    </pre>
                </div>
            )
        }

        return this.props.children;
    }
}
