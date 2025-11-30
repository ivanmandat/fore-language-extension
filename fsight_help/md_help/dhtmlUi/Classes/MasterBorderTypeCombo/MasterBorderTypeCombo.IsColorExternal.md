# MasterBorderTypeCombo.IsColorExternal

MasterBorderTypeCombo.IsColorExternal
-


# MasterBorderTypeCombo.IsColorExternal


## Синтаксис


IsColorExternal: Boolean;


## Описание


Свойство IsColorExternal
 определяет метод определения цвета границы.


## Комментарии


При значении true
 будет установлен режим «В цвет показателя», при значении false
 - режим ручного задания цвета.


## Пример


Для выполнения примера добавьте ссылки на сборку PP.js и div ноду с
 идентификатором «bc1». Создадим мастер редактирования границ:


var IMAGE_PATH = "../build/img/"; // Путь к папке с пиктограммами
// Укажем путь к корневой папке, содержащей файлы ресурсов
PP.resourceManager.setRootResourcesFolder("../resources/");
// Определяем текущие региональные настройки
PP.setCurrentCulture(PP.Cultures.ru);
// Создадим мастер редактирования границ
var borderCombo = new PP.Ui.MasterBorderTypeCombo({
    ParentNode: document.getElementById("bc1"),
    ImagePath: IMAGE_PATH
});
После создания мастера определим текущий метод определения цвета:


// Определим метод определения цвета границы
console.debug(borderCombo.getIsColorExternal() ? "Цвет берется от показателя" : "Цвет устанавливается вручную");
// Определим ресурс
console.debug(borderCombo.getIsColorExternalResourceKey());
// Установим обработчик событий, при смене метода определения цвета
borderCombo.IsColorExternalChanged.add(function(){alert("Метод определения цвета границы изменен")});
См. также:


[MasterBorderTypeCombo](MasterBorderTypeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
