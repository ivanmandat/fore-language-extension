# Form.OnHelp

Form.OnHelp
-


# Form.OnHelp


## Синтаксис


OnHelp(Sender: Object; Args: [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnHelp наступает во
 время нажатия на компонент при активном режиме отображения справки, либо
 при нажатии кнопки «F1» для активного компонента.


## Комментарии


Режим отображения справки активируется нажатием на кнопку «?» при установленном
 свойстве [BorderStyle](../../Interface/IFormControl/IFormControl.BorderStyle.htm)
 = DialogWithHelp. Эмулировать нажатие на данную кнопку можно методом [EnterContextHelpMode](../../Interface/IFormControl/IFormControl.EnterContextHelpMode.htm).


Для вызова справки необходимо использовать соответствующие методы, реализованные
 в интерфейсе [IWinApplicationHelp](UiLib.chm::/Interface/IWinApplicationHelp/IWinApplicationHelp.htm).


## Пример


Для выполнения примера предполагается наличие формы и расположенных
 на ней каких-либо компонентов. Для всех компонентов установлены уникальные
 значения свойства HelpContext. Для обработки события OnHelp формы установлена
 данная процедура. В папке приложения должен содержаться файл Help.chm.


	Sub FormOnHelp(Sender: Object; Args: IHelpEventArgs);

	Var

	    Help: IWinApplicationHelp;

	Begin

	    Help := WinApplication.Help;

	    Help.Context(Args.ContextId, "Help.chm");

	End Sub FormOnHelp;


При выборе компонента и нажатии клавиши F1 будет вызываться файл справки
 Help.chm. Соответствующий раздел справки будет искаться по значению идентификатора
 раздела справки, установленного для конкретного компонента.


См. также:


[Form](Form.htm) | [IWinApplicationHelp](UiLib.chm::/Interface/IWinApplicationHelp/IWinApplicationHelp.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
