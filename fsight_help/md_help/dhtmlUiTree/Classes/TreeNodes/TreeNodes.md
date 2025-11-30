# TreeNodes

TreeNodes
-


# TreeNodes


Пространство имен: PP.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


TreeNodes


## Описание


Класс TreeNodes реализует API
 коллекции вершин компонента [TreeList](../../Components/TreeList/TreeList.htm).


## Синтаксис


PP.initClass(PP.Ui.TreeNodes, PP.[Object](dhtmlCommon.chm::/Classes/object/object.htm),
 "TreeNodes");


## Свойства


		 Имя метода
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Filter](TreeNodes.filter.htm)
		 Свойство Filter
		 определяет текст, по которому будут фильтроваться вершины.


		 ![](../../Property_Image.gif)
		 [FilterColumn](TreeNodes.FilterColumn.htm)
		 Свойство FilterColumn
		 определяет индекс столбца, по данным которого в иерархическом
		 дереве осуществляется фильтрация вершин.


		 ![](../../Property_Image.gif)
		 [FilterMethod](TreeNodes.FilterMethod.htm)
		 Свойство FilterMethod
		 определяет пользовательскую функцию для фильтрации вершин иерархического
		 дерева.


		 ![](../../Property_Image.gif)
		 [FilterValue](TreeNodes.FilterValue.htm)
		 Свойство FilterValue
		 определяет значение, по которому осуществляется фильтрация узлов
		 иерархического дерева.


		 ![](../../Property_Image.gif)
		 [Sort](TreeNodes.Sort.htm)
		 Свойство Sort определяет
		 способ сортировки для выбранного столбца.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../sub_image.gif)
		 [clear](TreeNodes.clear.htm)
		 Метод clear удаляет
		 все вершины в коллекции.


		 ![](../../sub_image.gif)
		 [deleteNode](treenodes.deletenode.htm)
		 Метод deleteNode удаляет
		 вершину дерева.


		 ![](../../sub_image.gif)
		 [getCount](TreeNodes.getCount.htm)
		 Метод getCount возвращает
		 количество дочерних вершин у указанной вершины.


		 ![](../../sub_image.gif)
		 [getItem](TreeNodes.getItem.htm)
		 Метод getItem возвращает
		 вершину по индексу.


		 ![](../../sub_image.gif)
		 [getItemByKey](TreeNodes.getItemByKey.htm)
		 Метод getItemByKey
		 возвращает вершину по ключу.


		 ![](../../sub_image.gif)
		 [getItemKey](TreeNodes.getItemKey.htm)
		 Метод getItemKey возвращает
		 ключ вершины по индексу.


		 ![](../../sub_image.gif)
		 [getItemValue](TreeNodes.getItemValue.htm)
		 Метод getItemValue
		 возвращает значение свойства вершин по индексу.


		 ![](../../sub_image.gif)
		 [insertNode](TreeNodes.insertNode.htm)
		 Метод insertNode вставляет
		 вершину в дерево.


		 ![](../../sub_image.gif)
		 [loadFrom](TreeNodes.loadFrom.htm)
		 Метод loadFrom
		 вставляет массив элементов дерева в вершину, удаляя все ее дочерние
		 вершины, которые были до этого.


		 ![](../../sub_image.gif)
		 [setChildProps](TreeNodes.setChildProps.htm)
		 Метод setChildProps
		 устанавливает свойства вершинам и, если необходимо, всем их потомкам.


		 ![](../../sub_image.gif)
		 [updateFrom](TreeNodes.updateFrom.htm)
		 Метод updateFrom
		 вставляет массив элементов дерева в вершину, удаляя все ее дочерние
		 вершины, и сохраняет состояние элементов (то есть установленные
		 для них свойства), инициализируя их по [ключу](../TreeNode/TreeNode.Key.htm).


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../sub_image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../sub_image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../sub_image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../sub_image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../sub_image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../sub_image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../sub_image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../sub_image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../sub_image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../sub_image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../sub_image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../sub_image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../sub_image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP.Ui](dhtmlUi.chm::/Classes/classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
