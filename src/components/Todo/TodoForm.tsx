import { useForm, zodResolver } from '@mantine/form';
import {
  TextInput,
  Checkbox,
} from '@mantine/core'
import z from 'zod';

const todoFormSchema = z.object({
  title: z.string().nonempty(),
  completed: z.boolean().default(false),
});

export type TodoFormValues = z.infer<typeof todoFormSchema>;

// function foo<T = string>(a: T): T[]{
//   return [a,a,a]
// }

// foo("foo") // ["foo", "foo", "foo"]
// foo<number>(4) // [4, 4, 4]


type Props = {
  onSubmit: (values: TodoFormValues) => void;
  defaultValues?: TodoFormValues;
}

const TodoForm = ({
  onSubmit,
  defaultValues,
}: Props) => {
  const form = useForm<TodoFormValues>({
    initialValues: {
      title: '',
      completed: false,
      ...defaultValues,
    },
    validate: zodResolver(todoFormSchema),
  });

  const handleSubmit = (values: TodoFormValues) => {
    console.log(values);
    onSubmit(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        label='Title'
        placeholder='Title'
        {...form.getInputProps('title')}
      />
      <Checkbox
        label='Completed'
        {...form.getInputProps('completed')}
      />
      <button
        className='w-full p-2 mt-2 text-white bg-blue-500 rounded'
      >
        Save
      </button>
    </form>
  )
}

export default TodoForm