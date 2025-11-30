# CommandEventArgs.Create

CommandEventArgs.Create
-


# CommandEventArgs.Create


## Синтаксис


Create(Command: String; Argument: Variant; Result:
 Variant);


## Параметры


Command. Наименование команды,
 которую необходимо отправить.


Argument. Значение аргумента
 команды.


Result. Результат выполнения
 команды.


## Описание


Конструктор Create создает аргумент
 события, возникающего во время отправления команды форме.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием Button1. У формы имеется обработчик события
 OnCommand, в данном обработчике содержится код для выполнения команды
 - Квадрат.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Argument: CommandEventArgs;

Begin

    Argument := New CommandEventArgs.Create("Квадрат", 3, Null);

    Self.OnCommand(Self, Argument);

    Debug.WriteLine(Argument.Result);

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для текущей формы будет
 сгенерировано событие OnCommand. В качестве параметра передается указанная
 команда и аргумент команды. Результат выполнения команды будет выведен
 в консоль среды разработки.


См. также:


[CommandEventArgs](CommandEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
