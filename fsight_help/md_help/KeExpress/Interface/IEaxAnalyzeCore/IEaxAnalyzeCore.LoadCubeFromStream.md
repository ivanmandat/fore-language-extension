# IEaxAnalyzeCore.LoadCubeFromStream

IEaxAnalyzeCore.LoadCubeFromStream
-


# IEaxAnalyzeCore.LoadCubeFromStream


## Синтаксис


LoadCubeFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm)
 );


## Параметры


Stream. Поток, из которого
 будут загружены данные.


## Описание


Метод LoadCubeFromStream загружает
 данные куба в экспресс-отчет из потока.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных
 для TabSheetBox. В «UiErAnalyzer1» должен быть загружен экспресс-отчет.
 Также в файловой системе должен присутствовать файл C:\EXPR_C.p5с, содержащий
 сохраненный куб.


Пример выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    mb: IMetabase;

	    Expr: IEaxAnalyzer;

	    Fs: IFileStream;

	Begin

	    mb := MetabaseClass.Active;

	    Expr := UiErAnalyzer1.ErAnalyzer;

	    Fs := New FileStream.Create("C:\EXPR_C.p5с", FileOpenMode.Read, FileShare.DenyWrite);

	    Expr.LoadCubeFromStream(Fs);

	End Sub Button1OnClick;


После выполнения примера в экспресс-отчет будут загружены данные куба
 из потока. Поток представляет файл C:\EXPR_C.p5с.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
