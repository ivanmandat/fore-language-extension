# IEaxDataAreaSlice.MarkerDimension

IEaxDataAreaSlice.MarkerDimension
-


# IEaxDataAreaSlice.MarkerDimension


## Синтаксис


MarkerDimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство MarkerDimension
 определяет измерение объектов геолокации.


## Комментарии


Источник данных карты должен содержать единственное измерение объектов
 геолокации. Данное измерение должно быть построено на основе справочника
 НСИ, содержащего вещественные атрибуты «LATITUDE» и «LONGITUDE». Атрибуты
 должны содержать значения широты и долготы для маркеров геолокации.


## Пример


Для выполнения примера в репозитории экспресс-отчета с идентификатором
 EXPRESS_MARKERS. Источником данных отчета является база данных временных
 рядов, содержащая атрибут показателей с идентификатором «CITY». Данный
 атрибут является ссылкой на справочник НСИ, содержащий вещественные атрибуты
 «LATITUDE» и «LONGITUDE» со значениями широты и долготы для маркеров геолокации.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Express, Metabase,
 Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DArea: IEaxDataArea;

	    DAreaSlice: IEaxDataAreaSlice;

	    Rub: IRubricator;

	    Atts: IMetaAttributes;

	    DictObj: IMetabaseObjectDescriptor;

	    DimInst: IDimInstance;

	Begin

	    // Получаем репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    Express := MB.ItemById("EXPRESS_MARKERS").edit As IEaxAnalyzer;

	    DArea := Express.DataArea;

	    If DArea.Slices.Count > 0 Then

	        DAreaSlice := DArea.Slices.Item(0);

	        // Получаем источник данных для среза данных

	        Rub := DAreaSlice.DataSource As IRubricator;

	        // Получаем атрибуты временных рядов

	        Atts := Rub.Facts.Attributes;

	        // Получаем справочник, являющийся источником данных для атрибута «CITY»

	        DictObj := Atts.FindById("CITY").ValuesObject;

	        // Открываем полученный справочник

	        DimInst := DictObj.Open(Null) As IDimInstance;

	        // Устанавливаем открытый справочник в качестве измерения объектов геолокации

	        DAreaSlice.MarkerDimension := DimInst;

	    End If;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в экспресс-отчете будет задано измерение
 объектов геолокации.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
