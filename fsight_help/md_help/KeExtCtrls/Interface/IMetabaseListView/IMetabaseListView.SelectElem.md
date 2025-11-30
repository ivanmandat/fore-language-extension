# IMetabaseListView.SelectElem

IMetabaseListView.SelectElem
-


# IMetabaseListView.SelectElem


## Синтаксис


SelectElem(Object: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm),
 [Focus: Boolean = False]);


## Параметры


Object. Описание объекта репозитория;


Focus. Признак необходимости
 передать фокус элементу.


## Описание


Метод SelectElem выделяет элемент
 компонента, который соответствует объекту репозитория с указанным описанием.


## Комментарии


Если в компоненте разрешена множественная отметка, то элемент будет
 добавлен в список уже выделенных.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента MetabaseListView с наименованием
 «MetabaseListView1». У компонента MetabaseListView в свойстве Root выбрана
 какая-либо папка репозитория.


Добавьте ссылки на системные сборки: ExtCtrls, Metabase.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Descs: IMetabaseObjectDescriptors;

	    Desc: IMetabaseObjectDescriptor;

	Begin

	    // Получаем описание объекта репозитория

	    Desc := MetabaseListView1.GetItemObject(MetabaseListView1.Items.Item(1) As IMetabaseListViewItem);

	    // Выделяем элемент, который соответствует объекту репозитория с указанным описанием

	    MetabaseListView1.SelectElem(Desc);

	    Descs := MetabaseListView1.SelectedObjects;

	    // Выводим в консоль количество объектов в выбранной папке и выделенных объектов

	    Debug.WriteLine("Всего объектов: " + MetabaseListView1.Items.Count.ToString);

	    Debug.WriteLine("Выделено объектов: " + MetabaseListView1.SelectedCount.ToString);

	    Debug.Indent;

	    For Each Desc In Descs Do

	        Debug.WriteLine(Desc.Name + " (" + Desc.Id + ')');

	    End For;

	    Debug.Unindent;

	End Sub Button1OnClick;


В результате выполнения примера будут выделены первые два элемента в
 компоненте, в окно консоли будут выведены: количество элементов
 в выбранной папке, количество выделенных элементов, наименования и идентификаторы
 выделенных компонентов.


См. также:


[IMetabaseListView](IMetabaseListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
