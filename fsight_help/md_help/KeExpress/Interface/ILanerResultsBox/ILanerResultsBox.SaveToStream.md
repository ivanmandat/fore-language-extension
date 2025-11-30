# ILanerResultsBox.SaveToStream

ILanerResultsBox.SaveToStream
-


# ILanerResultsBox.SaveToStream


## Синтаксис


SaveToStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток данных, в который
 будут сохранены параметры.


## Описание


Метод SaveToStream сохраняет
 параметры отображения компонента LanerResultsBox
 в поток.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox, компонента
 LanerResultsBox с наименованием «LanerResultsBox1» и компонента UiErAnalyzer,
 являющегося источником данных для LanerBox и LanerResultsBox. В «UiErAnalyzer1»
 должна быть загружена рабочая книга базы данных временных рядов.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    pStream: IIOStream;

	Begin

	    pStream := New MemoryStream.Create;

	    LanerResultsBox1.SaveToStream(pStream);

	End Sub Button1OnClick;


После выполнения примера параметры отображения компонента LanerResultsBox
 будут сохранены в поток данных «pStream».


См. также:


[ILanerResultsBox](ILanerResultsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
