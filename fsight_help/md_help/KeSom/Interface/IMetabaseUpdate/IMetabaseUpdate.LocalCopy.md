# IMetabaseUpdate.LocalCopy

IMetabaseUpdate.LocalCopy
-


# IMetabaseUpdate.LocalCopy


## Синтаксис


		LocalCopy: Boolean;


## Описание


Свойство LocalCopy определяет
 признак копирования данных при локальном копировании объектов репозитория
 с помощью обновления.


## Комментарии


Допустимые значения:


	- True. При локальном
	 копировании объектов репозитория с помощью обновления будет осуществлено
	 копирование данных из исходных объектов;


	- False. При локальном
	 копировании объектов репозитория с помощью обновления не осуществляется
	 копирование данных из исходных объектов.


Примечание.
 В «Форсайт. Аналитическая платформа»
 свойство используется для локального копирования автокубов вместе с данными.
 В частности используется для копирования контейнеров моделирования и его
 дочерних объектов, построенных на основе автокубов.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODELSPACE и папки с идентификатором COPY_OBJECT.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Source, Parent: IMetabaseObjectDescriptor;

		    Update: IMetabaseUpdate;

		    RootNode: IMetabaseUpdateObjectNode;

		Begin

		    Mb := MetabaseClass.Active;

		    Source := Mb.ItemById("ModelSpace");

		    Parent := Mb.ItemById("COPY_OBJECT");

		    Update := Mb.CreateUpdate;

		    //Признак локальной копии

		    Update.LocalCopy := True;

		    //Обновление по идентификаторам

		    Update.BoundType := MetabaseObjectUpdateBoundType.ById;

		    //Добавление в корень обновления контейнера моделирования

		    //При выполнении метода AddToUpdate будет произведено

		    //рекурсивное добавление всех дочерних объектов каталога моделирования

		    AddToUpdate(Source, Update.RootFolder);

		    RootNode := Update.RootFolder.Item(0) As IMetabaseUpdateObjectNode;

		    RootNode.Parent.ObjectId := Parent.Id;

		    //Новое наименование и идентификатор для каталога

		    RootNode.ObjectId := Source.Id + "_Copy";

		    RootNode.ObjectName := "Копия " + Source.Id;

		    Update.SaveToFileNF("c:\ModelSpace.pefx");

		End Sub UserProc;


		Sub AddToUpdate(Object: IMetabaseObjectDescriptor; Folder: IMetabaseUpdateFolderNode);

		Var

		    Node: IMetabaseUpdateObjectNode;

		    NodeAsFolder: IMetabaseUpdateFolderNode;

		    Children: IMetabaseObjectDescriptors;

		    Child: IMetabaseObjectDescriptor;

		Begin

		    Node := Folder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

		    Node.Object := Object;

		    //Параметры обновления объектов

		    Node.UpdatePart := MetabaseObjectUpdatePart.DataMetadata;

		    Node.Constraint := MetabaseObjectUpdateConstraint.CreateOnly;

		    //Рекурсивное добавление дочерних объектов

		    Children := Object.FetchChildren;

		    NodeAsFolder := Node As IMetabaseUpdateFolderNode;

		    For Each Child In Children Do

		        AddToUpdate(Child, NodeAsFolder);

		    End For;

		End Sub AddToUpdate;


В результате выполнения примера будет создан новый файл обновления.
 В обновление будет включен контейнер моделирования со всеми дочерними
 объектами. Данное обновление будет предназначено для применения в том
 же репозитории, в котором оно создано. Если произвести обновление, то
 в папке COPY_OBJECT будет создана копия контейнера моделирования. Переменные
 моделирования будут скопированы вместе с данными.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
