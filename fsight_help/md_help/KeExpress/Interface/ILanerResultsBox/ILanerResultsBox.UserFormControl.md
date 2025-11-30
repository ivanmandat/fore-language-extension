# ILanerResultsBox.UserFormControl

ILanerResultsBox.UserFormControl
-


# ILanerResultsBox.UserFormControl


## Синтаксис


UserFormControl: [IFormControl](ModForms.chm::/Interface/IFormControl/IFormControl.htm);


## Описание


Свойство UserFormControl возвращает
 параметры подключенной пользовательской формы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox, компонента
 LanerResultsBox с наименованием «LanerResultsBox1» и компонента UiErAnalyzer,
 являющегося источником данных для LanerBox и LanerResultsBox. В «UiErAnalyzer1»
 должна быть загружена рабочая книга базы данных временных рядов. Также
 в репозитории должна присутствовать пользовательская форма с идентификатором
 «USER_PANEL».


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    UserPanel: IFormControl;

	Begin

	    LanerResultsBox1.ContainerVisible(LanerBoxContainerType.Chart) := True;

	    LanerResultsBox1.UserFormReplacePanel := LanerBoxContainerType.Chart;

	    LanerResultsBox1.UserForm := "USER_PANEL";

	    UserPanel := LanerResultsBox1.UserFormControl;

	    UserPanel.ShowHint := True;

	End Sub Button1OnClick;


После выполнения примера в компонент LanerResultsBox вместо панели «Диаграмма»
 будет подключена пользовательская форма. Например:


![](ILanerResultsBox_UserForm.gif)


Для пользовательской панели будет включено отображение всплывающих подсказок.


См. также:


[ILanerResultsBox](ILanerResultsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
