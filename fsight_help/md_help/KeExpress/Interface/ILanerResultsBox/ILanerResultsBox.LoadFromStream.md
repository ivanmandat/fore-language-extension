# ILanerResultsBox.LoadFromStream

ILanerResultsBox.LoadFromStream
-


# ILanerResultsBox.LoadFromStream


## Синтаксис


LoadFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток данных, из которого
 будут загружены параметры.


## Описание


Метод LoadFromStream загружает
 параметры отображения компонента LanerResultsBox
 из потока.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox, компонента
 LanerResultsBox с наименованием «LanerResultsBox1» и компонента UiErAnalyzer,
 являющегося источником данных для LanerBox и LanerResultsBox. В «UiErAnalyzer1»
 должна быть загружена рабочая книга базы данных временных рядов. Также
 предполагается наличие потока данных «pStream», содержащего параметры
 отображения компонента «LanerResultsBox1».


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    pStream: IIOStream;

	Begin

	    pStream.Position := 0;

	    LanerResultsBox1.LoadFromStream(pStream);

	    Dispose pStream;

	End Sub Button1OnClick;


После выполнения примера параметры отображения компонента LanerResultsBox
 будут загружены из потока данных «pStream».


См. также:


[ILanerResultsBox](ILanerResultsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
