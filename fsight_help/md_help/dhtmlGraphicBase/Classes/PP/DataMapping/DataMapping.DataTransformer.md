# DataMapping.DataTransformer

DataMapping.DataTransformer
-


# DataMapping.DataTransformer


## Синтаксис


DataTransformer: PP.IDataAdapter;


## Описание


Свойство DataTransformer определяет преобразователь данных.


## Комментарии


Значение свойства устанавливается из JSON и с помощью свойства setDataTransformer.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart.htm) с наименованием «bubbleChart» (см. «[Пример создания компонента BubbleChart](dhtmlBubbleChart.chm::/Components/BubbleChart/BubbleChart_Example.htm)»). Преобразуем набор чисел с помощью собственного преобразователя, увеличивающего значение на входе в 20 раз:


// Получим объект сопоставления данных рядов цветам пузырьков матрицы
var colorVisual = bubbleChart.getColorVisual();
// Получим настройки сопоставления данных
var mapping = colorVisual.getColorMapping();
// Опишем собственный преобразователь данных
PP.MyTransformer = function (settings) {
    PP.MyTransformer.base.constructor.apply(this, arguments);
};
PP.initClass(PP.MyTransformer, PP.Object, 'PP.MyTransformer', ['PP.IDataAdapter']);
var myTransP = PP.MyTransformer.prototype;
// Значение на входе будем увеличивать в 20 раз
myTransP.getData = function (value) {
    return value * 20;
};
myTransP.init = myTransP.getMinData = myTransP.getMaxData = function (data) {};
// Установим тип сопоставления данных
mapping.setType(PP.DataMappingType.Transformer);
// Установим собственный преобразователь данных
mapping.setDataTransformer(new PP.MyTransformer());
console.log("Преобразователь данных:");
console.log("Вход: -0.05, выход: " + mapping.getDataTransformer().getData(-0.05));
console.log("Вход: 0, выход: " + mapping.getDataTransformer().getData(0));
console.log("Вход: 5, выход: " + mapping.getDataTransformer().getData(5));
console.log("Вход: 1000, выход: " + mapping.getDataTransformer().getData(1000));

В результате выполнения примера был создан собственный преобразователь, увеличивающий значение на входе в 20 раз, а в консоли среды разработки были выведены результаты преобразования чисел -0.05, 0, 5 и 1000:


Преобразователь данных:


Вход: -0.05, выход: -1


Вход: 0, выход: 0


Вход: 5, выход: 100


Вход: 1000, выход: 20000


См. также:


[DataMapping](DataMapping.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
