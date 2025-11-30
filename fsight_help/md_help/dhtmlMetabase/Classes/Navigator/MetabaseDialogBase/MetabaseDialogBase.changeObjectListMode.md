# MetabaseDialogBase.changeObjectListMode

MetabaseDialogBase.changeObjectListMode
-


**


# MetabaseDialogBase.changeObjectListMode


## Синтаксис


changeObjectListMode(sender: [PP.Ui.MenuItem](dhtmlUi.chm::/Classes/MenuItem/MenuItem.htm),
 args: Object);


## Параметры


*sender*. Пункт в меню выбора вида
 списка объектов в диалоге;


*args*. Информация о событии Click. Параметр представляет собой
 JSON-объект со следующими свойствами: Break - признак отмены данного события,
 MenuItem - выбранный пункт меню, SelectedIndex - его индекс, Element -
 DOM-элемент, Event - событие выбора данного пункта меню. Необязательный
 параметр.


## Описание


Метод changeObjectListMode**
 устанавливает вид списка объектов в базовом диалоге с репозиторием.


## Комментарии


Данный метод используется в качестве обработчика события при нажатии на пункт
 меню «Вид» в базовом диалоге с репозиторием. По умолчанию выбран вид «Таблица».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MetabaseDialogBase](../../../Components/Metabase/Dialogs/MetabaseDialogBase/MetabaseDialogBase.htm)
 с наименованием «metabaseDialogBase» (см. «[Пример
 создания компонента MetabaseDialogBase](../../../Components/Metabase/Dialogs/MetabaseDialogBase/MetabaseDialogBase_Example.htm)»). Установим в базовом диалоге
 с репозиторием вид списка объектов «Крупные значки»:


// Получим пункт меню «Крупные значки»
var item = metabaseDialogBase._menu3.getItems()[1];
// Установим для диалога вид «Крупные значки»
metabaseDialogBase.changeObjectListMode(item, null);
// Обновим диалог с очисткой кеш-данных
metabaseDialogBase.refreshAll(true);

В результате выполнения примера для списка объектов в диалоге был установлен
 вид «Крупные значки»:


![](MetabaseDialogBase_changeObjectListMode.png)


См. также:


[MetabaseDialogBase](MetabaseDialogBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
