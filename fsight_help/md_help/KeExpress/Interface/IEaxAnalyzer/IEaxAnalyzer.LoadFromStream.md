# IEaxAnalyzer.LoadFromStream

IEaxAnalyzer.LoadFromStream
-


# IEaxAnalyzer.LoadFromStream


## Синтаксис


LoadFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);
 [Options: [EaxSaveLoadOptions](../../Enums/EaxSaveLoadOptions.htm)
 = 0]);


## Параметры


Stream.
 Поток, из которого будут загружены данные.


Options.
 Параметры загрузки данных. Необязательный параметр.


## Описание


Метод LoadFromStream загружает
 данные в экспресс-отчет из потока.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных
 для TabSheetBox. В «UiErAnalyzer1» должен быть загружен экспресс-отчет.
 Также в файловой системе должен присутствовать файл C:\EXPR.ppexpress,
 содержащий сохраненный экспресс-отчет.


Пример выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    mb: IMetabase;

	    Expr: IEaxAnalyzer;

	    Fs: IFileStream;

	Begin

	    mb := MetabaseClass.Active;

	    Expr := UiErAnalyzer1.ErAnalyzer;

	    Fs := New FileStream.Create("C:\EXPR.ppexpress", FileOpenMode.Read, FileShare.DenyWrite);

	    Expr.LoadFromStream(Fs);

	End Sub Button1OnClick;


После выполнения примера в экспресс-отчет будут загружены данные из
 потока. Поток представляет файл C:\EXPR.ppexpress.


См. также:


[IEaxAnalyzer](IEaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
