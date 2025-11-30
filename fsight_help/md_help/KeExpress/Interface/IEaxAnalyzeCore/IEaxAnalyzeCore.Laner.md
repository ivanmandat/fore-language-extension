# IEaxAnalyzeCore.Laner

IEaxAnalyzeCore.Laner
-


# IEaxAnalyzeCore.Laner


## Синтаксис


Laner: [ILaner](Laner.chm::/Interface/ILaner/ILaner.htm);


## Описание


Свойство Laner возвращает
 рабочую книгу базы данных временных рядов.


## Комментарии


Свойство зависит от режима отображения, заданного в [IEaxAnalyzeCore.Mode](IEaxAnalyzeCore.Mode.htm):


	- MultiDimension. Свойство
	 Laner возвращает значение
	 Null. Для работы с рабочей книгой используйте [IEaxAnalyzeCore.Pivot](IEaxAnalyzeCore.Pivot.htm);


	- Series. Свойство Laner возвращает рабочую книгу,
	 свойство [IEaxAnalyzeCore.Pivot](IEaxAnalyzeCore.Pivot.htm)
	 имеет значение Null.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента LanerBox
 и компонента UiErAnalyzer с идентификатором
 «UiErAnalyzer1», являющегося источником данных для LanerBox.
 В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	Begin

	    EaxAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := EaxAn.Laner;

	    If Laner <> Null Then

	        Laner.StartDate := DateTime.ComposeDay(2005, 01, 01);

	    End If;

	End Sub Button1OnClick;


После нажатия на кнопку «Button1» будет изменена дата начала отображения
 данных в рабочей книге, загруженной в компонент LanerBox.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
