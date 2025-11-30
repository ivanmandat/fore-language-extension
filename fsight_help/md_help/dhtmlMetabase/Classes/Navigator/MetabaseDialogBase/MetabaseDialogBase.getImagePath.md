# MetabaseDialogBase.getImagePath

MetabaseDialogBase.getImagePath
-


**


# MetabaseDialogBase.getImagePath


## Синтаксис


getImagePath();


## Описание


Метод getImagePath** возвращает
 путь к папке со значками.


## Комментарии


Метод возвращает значение типа String.


## Примеры


Для выполнения примера необходимо наличие на html-странице компонента
 [MetabaseDialogBase](../../../Components/Metabase/Dialogs/MetabaseDialogBase/MetabaseDialogBase.htm)
 с наименованием «metabaseDialogBase» (см. «[Пример
 создания компонента MetabaseDialogBase](../../../Components/Metabase/Dialogs/MetabaseDialogBase/MetabaseDialogBase_Example.htm)»). Определим путь к папке со
 значками диалога и наименование репозитория:


// Получим путь к папке со значками диалога
var imagePath = metabaseDialogBase.getImagePath();
console.log("Путь к папке со значками: " + imagePath);
// Получим родительский объект репозитория
var parentMbObject = metabaseDialogBase.getParentMbObject();
console.log("Наименование репозитория: " + parentMbObject.getName());

В результате выполнения примера в консоли браузера были выведены путь
 к папке со значками диалога и наименование репозитория:


Путь к папке со значками: ../build/img/

Наименование репозитория: Warehouse


См. также:


[MetabaseDialogBase](MetabaseDialogBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
