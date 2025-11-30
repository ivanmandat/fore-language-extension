# MetabaseObjectsListView.addObject

MetabaseObjectsListView.addObject
-


# MetabaseObjectsListView.addObject


## Синтаксис


addObject(object);


## Параметры


object. Добавляемый объект
 класса [PP.Mb.Object](../Object/Object.htm).


## Описание


Метод addObject добавляет объект
 репозитория в компонент.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/MetabaseObjectsListView.htm)
 с наименованием «list» (см. «[Пример
 создания компонента MetabaseObjectsListView](../../../Components/Metabase/MetabaseObjectsListView/Example_MetabaseObjectsListView.htm)»). В репозитории должен
 быть объект с ключом 65903.


//Установим выравнивание ширины столбцов по содержимому
list.adjustColumnsWidthByContent();
// Установим фокус на объект с ключом 65903
list.setFocused(65903);
// Удалим из списка данный объект
obj = list.getFocusedObject();
key = obj.getKey();
list.deleteObject(key);
// Добавим удаленный объект
list.addObject(obj);
В результате выполнения примера было установлено выравнивание ширины
 столбцов по содержимому и добавлен ранее удаленный объект.


См. также:


[MetabaseObjectsListView](MetabaseObjectsListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
