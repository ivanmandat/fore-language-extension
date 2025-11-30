# IMetabaseUpdateSpecialObjectsNode.ApplyObject

IMetabaseUpdateSpecialObjectsNode.ApplyObject
-


# IMetabaseUpdateSpecialObjectsNode.ApplyObject


## Синтаксис


ApplyObject(Index: [MetabaseSpecialObject](../../Enums/MetabaseSpecialObject.htm)):
 Boolean;


## Параметры


Index. Тип специального объекта.


## Описание


Свойство ApplyObject определяет
 признак вхождения в обновление специального объекта, передаваемого посредством
 входного параметра.


## Комментарии


Если свойству установлено значение True,
 то указанный специальный объект будет включен в обновление.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 C файла обновления Update.pef.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Update: IMetabaseUpdate;

	    SpecialObjNode: IMetabaseUpdateSpecialObjectsNode;

	Begin

	    MB := MetabaseClass.Active;

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFileNF("C:\Update.pefx");

	    SpecialObjNode := Update.SpecialObjectsNode;

	    SpecialObjNode.ApplyObject(MetabaseSpecialObject.SharedParams) := True;

	    Update.SaveToFileNF("C:\Update.pefx");

	End Sub UserProc;


После выполнения примера в обновление, загруженное из файла, будет добавлен
 специальный объект: глобальные переменные. Затем обновление будет сохранено.


См. также:


[IMetabaseUpdateSpecialObjectsNode](IMetabaseUpdateSpecialObjectsNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
