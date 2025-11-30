# HelpEventArgs.Create

HelpEventArgs.Create
-


# HelpEventArgs.Create


## Синтаксис


Create(ContextId: Variant; Handled: Boolean);


## Параметры


ContextId. Идентификатор раздела
 справки, установленный у компонента.


Handled. Признак передачи управления
 справочной системе.


## Описание


Конструктор Create создает аргумент
 события, возникающего во время нажатия на компонент при активном режиме
 отображения справки, либо при нажатии кнопки «F1» для активного компонента.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". Для формы настроена
 обработка события OnHelp.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Argument: IHelpEventArgs;

	Begin

	    Argument := New HelpEventArgs.Create(100, True);

	    Self.OnHelp(Self, Argument)

	End Sub Button1OnClick;


После выполнения примера будет сгенерировано событие получения справки
 для компонента, имеющего идентификатор раздела справки - 100.


См. также:


[HelpEventArgs](HelpEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
