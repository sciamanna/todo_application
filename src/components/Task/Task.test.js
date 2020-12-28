import { render, screen } from '@testing-library/react'
import Task from './Task'
import userEvent from '@testing-library/user-event'
describe ('Task component', () => {
    afterEach (() => jest.clearAllMocks())
    test('Given the required props, When the component is rendered, Then the task text should be preset' ,
    () => {
        const requiredProps = {
            complete: false,
            text: "This is a test task",
            id: "0001",
            deleteTask: () => {}
        }
        render (<Task {...requiredProps } />)
        expect(screen.getByText("This is a test task")).toBeInTheDocument()
    })
    test('Given the required props, When the component is rendered, Then delete button should be preset' ,
    () => {
        const requiredProps = {
            complete: false,
            text: "This is a test task",
            id: "0001",
            deleteTask: () => {}
        }
        render (<Task {...requiredProps } />)
        expect(screen
            .getAllByRole("button")
            .filter(button => button.textContent === "Delete").length)
            .toBe(1)
    })
    test('Given a completed tast, When the component is rendered, Then complete button should NOT be preset' ,
    () => {
        const completedTasksProps = { 
            complete: true,
            text: "This is a completed task",
            id: "0001",
            deleteTask: () => {}
        }
        render (<Task {...completedTasksProps } />)
        expect(screen
            .getAllByRole("button")
            .filter(button => button.textContent === "Complete").length)
            .toBe(0)
    })
    test('Given an incomplete tast, When the component is rendered, Then complete button should be preset' ,
    () => {
        const incompletedTasksProps = {
            complete: false,
            text: "This is an incomplete task",
            id: "0001",
            deleteTask: () => {}
        }
        render (<Task {...incompletedTasksProps } />)
        expect(screen
            .getAllByRole("button")
            .filter(button => button.textContent === "Complete").length)
            .toBe(1)
    })

  test('Given a task is rendered, When the delete button is clicked, Then the delete task function is called withthe correct task id' ,
    () => {
        const mockDeleteFunction = jest.fn()
        const testTaskId = "0001"
        const requiredProps = {
            complete: false,
            text: "This is a test task",
            id: testTaskId,
            deleteTask: mockDeleteFunction
        }
        render (<Task {...requiredProps } />)
        const deleteButton = screen.getAllByRole("button").find(button => button.textContent === "Delete")
        userEvent.click(deleteButton)
        expect(mockDeleteFunction).toHaveBeenCalledWith(testTaskId)
    })
})
