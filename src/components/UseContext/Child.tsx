import { GrandChild } from './GrandChild';

export const Child = ({ theme }: { theme: string }) => {
    return (
        <div>
            <GrandChild theme={theme} />
        </div>
    )
}