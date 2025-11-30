# KeyEventArgs.Create

KeyEventArgs.Create
-


# KeyEventArgs.Create


## Синтаксис


Create(Key: Integer; ShiftState: Integer);


## Параметры


Key. Код клавиши клавиатуры.


ShiftState. Код нажатия вспомогательных
 клавиш (SHIFT, ALT и CTRL). Для установки значения используйте перечислимый
 тип [ShiftState](../../Enums/ShiftState.htm). Если использование
 вспомогательных клавиш не требуется, необходимо в качестве значения передавать
 "0".


## Описание


Конструктор Create создает аргумент
 событий [OnKeyDown](../../Interface/IControl/IControl.OnKeyDown.htm)
 и [OnKeyUp](../../Interface/IControl/IControl.OnKeyUp.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента EditBox с наименованием
 EditBox1. Для EditBox1 имеется обработчик события OnKeyDown.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Argument: IKeyEventArgs;

Begin

    Argument := New KeyEventArgs.Create(Keys.A, ShiftState.Shift);

    EditBox1.OnKeyDown(EditBox1, Argument);

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента EditBox1
 будет сгенерировано событие нажатия сочетания клавиш SHIFT+A в области
 компонента.


См. также:


[KeyEventArgs](KeyEventArgs.htm) | [ShiftState](../../Enums/ShiftState.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
