# IEaxAnalyzeCore.OpenCubeEx

IEaxAnalyzeCore.OpenCubeEx
-


# IEaxAnalyzeCore.OpenCubeEx


## Синтаксис


OpenCubeEx(CubeInstance: [ICubeInstance](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.htm);
 Options: [EaxOpenCubeOptions](../../Enums/EaxOpenCubeOptions.htm));


## Параметры


CubeInstance. Куб, являющийся
 источником данных;


Options. Режим открытия куба.


## Описание


Метод OpenCubeEx открывает куб
 (с расширенными параметрами), на базе которого строится экспресс-отчет.


## Комментарии


Доступные режимы:


	- EaxOpenCubeOptions.None.
	 Использовать только данные куба. Загружаются только данные куба;


	- EaxOpenCubeOptions.DefaultView.
	 Использовать данные и сохранённое представление куба. Если у куба
	 имеется сохранённое представление, то оно будет загружено. Сохраненное
	 представление содержит пользовательские настройки отображения куба.
	 Например: отображаемые элементы измерений, настройки диаграммы,
	 параметры подписей и т.д. Если сохранённое представление отсутствует,
	 то загружаются только данные куба.


## Пример


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 CUBE_SEP.


Добавьте ссылки на системные сборки: Cubes, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CreateInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Cube: ICubeInstance;

	Begin

	    MB := MetabaseClass.Active;

	    CreateInfo := MB.CreateCreateInfo;

	    CreateInfo.Id := MB.GenerateId("EXPR_REP");

	    CreateInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

	    MObj := MB.CreateObject(CreateInfo).Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Cube := MB.ItemById("CUBE_SEP").Open(Null) As ICubeInstance;

	    Expr.OpenCubeEx(Cube, EaxOpenCubeOptions.DefaultView);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет создан экспресс-отчет на базе сохранённого
 представления для куба CUBE_SEP. Идентификатор созданного отчёта выводится
 в окно консоли.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
