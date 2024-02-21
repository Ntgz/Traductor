import { Form, Placeholder } from 'react-bootstrap'
import { SectionType } from '../types'

interface Props {
    type: SectionType
    placeholder: string
    loading?: boolean
    onChange: (value: string) => void
    value: string
}

const commonStyles = { border: 0, height: '200px' }


export const TextArea = ({ type, value, onChange,placeholder }: Props) => {
    const styles = type === SectionType.From
        ? commonStyles
        : { ...commonStyles, backgroundColor: '#f5f5f5' }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return (
        <Form.Control
            autoFocus={type === SectionType.From}
            as='textarea'
            disabled={type === SectionType.To}
            placeholder={placeholder}
            style={styles}
            value={value}
            onChange={handleChange}
        />
    )
}