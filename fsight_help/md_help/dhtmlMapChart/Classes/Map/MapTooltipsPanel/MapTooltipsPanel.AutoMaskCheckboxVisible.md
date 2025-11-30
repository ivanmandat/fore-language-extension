# MapTooltipsPanel.AutoMaskCheckboxVisible

MapTooltipsPanel.AutoMaskCheckboxVisible
-


# MapTooltipsPanel.AutoMaskCheckboxVisible


## Синтаксис


AutoMaskCheckboxVisible: Boolean;


## Описание


Свойство AutoMaskCheckboxVisible
 определяет видимость переключателя автоматической маски текста.


## Комментарии


Значение свойства устанавливается через JSON и с помощью метода setAutoMaskCheckboxVisible.


## Пример


Для выполнения примера подключим сборки PP.js, PP.BaseMaster.js, PP.MapMaster.js
 и файл стилей PP.css. Добавим в тег <body> элемент <div> с
 идентификатором «Panel»:


// Создадим контейнер
var container = new PP.Ui.GridPanel({
  ParentNode: document.getElementById("Panel") }
);
// Создадим мастер
mmaster = new PP.Ui.MapTooltipsPanel({
  ResourceKey: "mmLabels",
  PropertyName: "MapChartSettings",
  SettingPrefix: "mapmaster.mainpanel.labels.",
  AutoMaskCheckboxVisible: false
});
// Добавим мастер
container.add(mmaster);
В результате выполнения примера была создана панель для редактирования
 всплывающих подсказок.


См. также:


[MapTooltipsPanel](MapTooltipsPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
