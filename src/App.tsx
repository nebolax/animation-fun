import React, { useState } from "react";
import { motion } from "framer-motion";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Check } from "lucide-react";

function YesComponent() {
    const Component = React.forwardRef((props, ref) => <Check ref={ref as any} />);

    const MotionComponent = motion(Component);

    return (
        <div>
            <CardHeader>
                <CardTitle>You are a great person</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center h-24">
                <MotionComponent
                    animate={{
                        width: 64,
                        height: 64,
                    }}
                />
            </CardContent>
        </div>
    );
}

interface Offset {
    x: number;
    y: number;
}

export function App() {
    const [offset, setOffset] = useState<Offset>({
        x: 0,
        y: 0,
    });
    const [clickedYes, setClickedYes] = useState(false);

    const maxXOffset = window.screen.availWidth / 2 - 200;
    const maxYOffset = window.screen.availHeight / 2 - 200;

    const onHoverNo = () => {
        const newOffset: Offset = {
            x: Math.random() * (maxXOffset * 2) - maxXOffset,
            y: Math.random() * (maxYOffset * 2) - maxYOffset,
        };
        setOffset(newOffset);
    };

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-yellow-100">
            <motion.div
                initial={{ opacity: 1 }}
                animate={{
                    translateX: offset.x,
                    translateY: offset.y,
                }}
            >
                <Card className="w-[350px] bg-violet-200">
                    {clickedYes ? (
                        <YesComponent />
                    ) : (
                        <>
                            <CardHeader>
                                <CardTitle>Is Civ good?</CardTitle>
                                <CardDescription>
                                    Do you like the Sid Meier's Civilization game?
                                </CardDescription>
                            </CardHeader>
                            <CardFooter className="flex gap-4">
                                <Button variant="outline" onMouseEnter={onHoverNo}>
                                    No
                                </Button>
                                <Button onClick={() => setClickedYes(true)}>Yes</Button>
                            </CardFooter>
                        </>
                    )}
                </Card>
            </motion.div>
        </div>
    );
}

export default App;
