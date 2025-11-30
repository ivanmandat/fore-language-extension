# FontTools.init

FontTools.init
-


# FontTools.init


## Синтаксис


init(value: PP.[Font](dhtmlCommon.chm::/Classes/PP/Font/Font.htm),
 _reInit: Boolean);


## Параметры


value. Настройки шрифта.


_reInit. При значении true будет произведено обновление,
 даже при совпадении установленного и устанавливаемого шрифтов.


## Описание


Метод init устанавливает настройки
 шрифта.


## Комментарии


Метод является аналогом метода [FontTools.setFont](FontTools.Font.htm).


## Пример


Для выполнения примера необходимо наличие в теге <head> html-страницы
 ссылок на файлы сценария PP.js, файл стилей PP.css и файл с ресурсами
 (например, resources.ru.js), в теге <body> html-страницы элемента
 <div> с идентификатором «Panel», а сам пример нужно разместить в
 теге <script>.


// Создадим контейнер для панели
var container = new PP.Ui.GridPanel({
  ParentNode: document.getElementById("Panel") }
);
// Создадим панель
var fontTools = new PP.Ui.FontTools({
  FamilyVisible: true,
  FamilyLabelVisible: false,
  Font: new PP.Font({ FontFamily: 'Arial', Size: 8, SizeUnits: PP.SizeUnits.Pt }),
});
// Добавим панель в контейнер
container.add(fontTools);
// Установим другой размер шрифта
fontTools.init(new PP.Font({ FontFamily: 'Arial', Size: 12, SizeUnits: PP.SizeUnits.Pt }));
// Добавим обработчик событий
fontTools.PropertyChanged.add(function(sender, args){
console.log(args.Font);
});
В результате выполнения примера была создана панель настройки шрифта.
 При ручном изменении параметров шрифта в консоль будет выведена информация
 о новом шрифте.


См. также:


[FontTools](FontTools.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
