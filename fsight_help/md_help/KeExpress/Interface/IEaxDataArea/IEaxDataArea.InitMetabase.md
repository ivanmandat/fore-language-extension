# IEaxDataArea.InitMetabase

IEaxDataArea.InitMetabase
-


# IEaxDataArea.InitMetabase


## Синтаксис


InitMetabase(


pMetabaseObj: [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm);


pMetabaseObjectDescriptor:
 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


pMetabase: [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm));


## Параметры


pMetabaseObj. Объект репозитория;


pMetabaseObjectDescriptor.
 Описание объекта репозитория;


pMetabase. Соединение с репозиторием.


## Описание


Метод InitMetabase инициализирует
 работу с объектами репозитория.


## Комментарии


Для получения параметров аналитической области данных используйте свойство
 [IEaxDataAreaSlice.Params](../IEaxDataAreaSlice/IEaxDataAreaSlice.Params.htm).


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EAX_DATAAREA.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    mbObj: IMetabaseObject;

	    mbObjDesc: IMetabaseObjectDescriptor;

	    Expr: IEaxAnalyzer;

	    DArea: IEaxDataArea;

	Begin

	    mb := MetabaseClass.Active;

	    mbObjDesc := mb.ItemById("EAX_DATAAREA");

	    mbObj := mbObjDesc.Bind;

	    Expr := mbObj As IEaxAnalyzer;

	    DArea := Expr.DataArea;

	    DArea.InitMetabase(mbObj, mbObjDesc, mb);

	    Debug.WriteLine("Количество срезов: " + DArea.Slices.Count.ToString);

	    DArea.Execute;

	End Sub UserProc;


После выполнения примера будет произведена инициализация заданного объекта
 репозитория (экспресс-отчета), в окно консоли будет выведено количество
 срезов, которое было использовано в качестве источников данных для экспресс-отчета.


См. также:


[IEaxDataArea](IEaxDataArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
