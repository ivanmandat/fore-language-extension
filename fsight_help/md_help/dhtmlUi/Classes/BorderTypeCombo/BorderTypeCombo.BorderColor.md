# BorderTypeCombo.BorderColor

BorderTypeCombo.BorderColor
-


# BorderTypeCombo.BorderColor


## Синтаксис


BorderColor: Boolean;


## Описание


Свойство BorderColor
 определяет метод определения цвета границы.


## Комментарии


Значение свойства устанавливается из JSON
 и с помощью метода setBorderColor,
 а возвращается с помощью метода getBorderColor.


## Пример


Для выполнения примера добавьте ссылки на сборку PP.js, PP.BaseMaster.js,
 PP.MapMaster.js и div элемент с идентификатором «Panel». Создадим мастер
 редактирования границ:


// Зададим настройки
set = {
BorderColor: "red",
BorderEnabled: true,
BorderType:  "solid",
BorderWidth: 2,
ColorControlVisible: true,
EnabledControlVisible: true,
MaxBorderWidth: 7,
MinBorderWidth: 1,
SplitLines: true,
TypeControlVisible: true,
TypeControlWidth: 0,
TypesMode: "CSS",
WidthControlSuffix: " px",
WidthControlVisible: true,
WidthControlWidth: 0
};
// Создадим мастер редактирования границ
var borderCombo = new PP.Ui.MasterBorderTypeCombo(set);
// Создадим контейнер
var container = new PP.Ui.GridPanel({
  ParentNode: document.getElementById("Panel") }
);
// Создадим мастер
mmaster = new PP.Ui.MasterBorderTypeCombo();
// Добавим мастер
container.add(mmaster);
// Добавим обработчики событий
mmaster.BorderColorChanged.add(function(sender,args){
console.log("Новый цвет:" + args.NewValue);
});
mmaster.BorderEnabledChanged.add(function(sender,args){
console.log(args.NewValue ? "Редактор включен" : "Редактор выключен");
});
mmaster.BorderTypeChanged.add(function(sender,args){
console.log("Новый тип линии:" + args.NewValue);
});
mmaster.BorderWidthChanged.add(function(sender,args){
console.log("Новая ширина линии:" + args.NewValue);
});
mmaster.ValueChanged.add(function(sender,args){
console.log("Настройки линии изменены:");
console.log(args.NewValue);
});
В результате выполнения примера был создан мастер редактирования границ.


См. также:


[BorderTypeCombo](BorderTypeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
