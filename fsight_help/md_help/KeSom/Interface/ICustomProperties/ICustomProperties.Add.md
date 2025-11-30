# ICustomProperties.Add

ICustomProperties.Add
-


# ICustomProperties.Add


## Синтаксис


Add(Id: String; Name: String; Value: Variant): [ICustomProperty](../ICustomProperty/ICustomProperty.htm);


## Параметры


Id. Идентификатор пользовательского
 свойства.


Name. Наименование пользовательского
 свойства.


Value. Значение пользовательского
 свойства.


## Описание


Метод Add создает новое пользовательское
 свойство.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «OBJECT».


Добавьте ссылку на системную сборку Metabase.


			Sub Main;

Var

    Mb: IMetabase;

    Obj: IMetabaseObjectDescriptor;

    Upd: IMetabaseUpdate;

    Nd: IMetabaseUpdateObjectNode;

    RootFolder: IMetabaseUpdateFolderNode;

    NdFol: IMetabaseUpdateFolderNode;

Begin

    // Получим текущий репозиторий

    Mb := MetabaseClass.Active;

    // Созданим объект обновление

    Upd := Mb.CreateUpdate;

    // Получим контейнер пользовательских классов с идентификатором "OBJECT"

    Obj := Mb.ItemById("OBJECT").Bind;

    // Создадим объект структуры обновления

    RootFolder := Upd.RootFolder;

    // Добавим в обновление объект

    Nd := RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

    Nd.Object := Obj;

    // Создадим новое пользовательское свойство

    Nd.CustomProperties.Add("CREATENEWPROPERTY", "ITEM", "NEWPROPERTY");

    // Сохраняем обновление в файл

    Upd.SaveToFileNF("C:\Update.pefx");

End Sub Main;


В результате выполнения примера будет создано обновление, содержащее
 объект с идентификатором «OBJECT». Будет добавлено новое пользовательское
 свойство в метаданные объекта и обновление будет сохранено в файл «C:\Update.pefx».


См. также:


[ICustomProperties](ICustomProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
