# IMetabaseListView.CheckedObjects

IMetabaseListView.CheckedObjects
-


# IMetabaseListView.CheckedObjects


## Синтаксис


CheckedObjects: [IMetabaseObjectDescriptors](KeSom.chm::/Interface/IMetabaseObjectDescriptors/IMetabaseObjectDescriptors.htm);


## Описание


Свойство CheckedObjects возвращает
 коллекцию описаний объектов, у которых в компоненте отмечены флажки.


## Комментарии


Свойство актуально, если для компонента свойству [Checkboxes](ModForms.chm::/Interface/IListView/IListView.Checkboxes.htm)
 установлено значение True.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента MetabaseListView с наименованием
 «MetabaseListView1». Свойству Checkboxes компонента «MetabaseListView1»
 выставлено значение True, в свойстве
 Root выбрана какая-либо папка репозитория.


Добавьте ссылку на системную сборку Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Descs: IMetabaseObjectDescriptors;

	    Desc: IMetabaseObjectDescriptor;

	Begin

	    Descs := MetabaseListView1.CheckedObjects;

	    For Each Desc In Descs Do

	        Debug.WriteLine(Desc.Name + " (" + Desc.Id + ')');

	    End For;

	End Sub Button1OnClick;


При нажатии на кнопку в консоль среды разработки будут выведены наименования
 и идентификаторы объектов, для которых в компоненте «MetabaseListView1»
 отмечены флажки.


См. также:


[IMetabaseListView](IMetabaseListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
