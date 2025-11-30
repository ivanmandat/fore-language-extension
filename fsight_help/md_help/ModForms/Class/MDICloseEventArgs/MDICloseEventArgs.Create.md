# MDICloseEventArgs.Create

MDICloseEventArgs.Create
-


# MDICloseEventArgs.Create


## Синтаксис


Create(MDIChild: [IFormControl](../../Interface/IFormControl/IFormControl.htm));


## Параметры


MDIChild.
 Дочерняя
 MDI-форма, которая будет закрыта.


## Описание


Конструктор Create создает аргумент
 события, возникающего в момент закрытия дочерней MDI-формы.


## Пример


Для выполнения примера предполагается наличие формы. Данная форма является
 родительской MDI-формой, содержащей несколько дочерних. У родительской
 MDI-формы имеется панель инструментов, содержащяя хотя бы одну кнопку.


			Sub ToolbarButton1OnClick(Sender: Object; Args: IEventArgs);

Var

    Arg: IMDICloseEventArgs;

Begin

    Arg := New MDICloseEventArgs.Create(Self.MDIChildren(0));

    Self.OnMDIClose(Self, Arg);

End Sub ToolbarButton1OnClick;


После выполнения примера при нажатии на кнопку панели инструментов для
 родительской MDI-формы будет сгенерировано событие на закрытие первой
 дочерней MDI-формы. Фактически дочерняя MDI-форма закрыта не будет.


См. также:


[MDICloseEventArgs](MDICloseEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
