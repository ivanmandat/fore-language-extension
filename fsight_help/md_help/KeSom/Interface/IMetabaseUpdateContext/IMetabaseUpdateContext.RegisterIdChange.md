# IMetabaseUpdateContext.RegisterIdChange

IMetabaseUpdateContext.RegisterIdChange
-


# IMetabaseUpdateContext.RegisterIdChange


## Синтаксис


RegisterIdChange(ClassId: Integer; OldId: String; NewId: String; newObject: [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm));


## Параметры


ClassId. Идентификатор класса объекта репозитория-приёмника, на который ссылается объект обновления.


OldId. Идентификатор объекта репозитория-источника, на который ссылается объект до обновления.


NewId. Идентификатор объекта репозитория-приёмника, на который ссылается объект после обновления.


newObject. Объект репозитория-приёмника, на который ссылается объект после обновления.


## Описание


Метод RegisterIdChange переопределяет идентификатор объекта, на который ссылается объект обновления.


## Комментарии


Метод RegisterIdChange используется для переопределения объекта, на который ссылается объект обновления, путем замены идентификаторов.


Если в качестве параметров NewId или newObject указать несуществующий идентификатор или объект, то обновление объекта репозитория произойдет без перенастройки ссылок.


В качестве значения параметра ClassId указывается одно из допустимых значений перечисления [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).


## Пример


Для выполнения примера предполагается наличие файла обновления «C:\Update.pefx» и наличие в репозитории объекта с идентификатором "BD2". Должна быть добавлена ссылка на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    UpdateCxt: IMetabaseUpdateContext;

    NewObject: IMetabaseObject;

Begin

    MB := MetabaseClass.Active;

    Update := MB.CreateUpdate;

    Update.LoadFromFileNF("C:\Update.pefx");

    UpdateCxt := Update.CreateUpdateContext;

    NewObject := Mb.ItemById("BD2").Bind As IMetabaseObject;

    UpdateCxt.RegisterIdChange(NewObject.ClassId, "BD1", "BD2", NewObject);

    Update.ApplyEx(Null, UpdateCxt);

End Sub UserProc;


После выполнения примера будет произведено обновление объектов репозитория-приёмника, загруженное из файла «C:\Update.pefx». Произойдет переопределение ссылки обновляемого объекта на объект репозитория-приёмника с идентификатором "BD2".


См. также:


[IMetabaseUpdateContext](IMetabaseUpdateContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
