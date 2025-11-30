# EaxMdService.Transformation

EaxMdService.Transformation
-


# EaxMdService.Transformation


## Синтаксис


Transformation: JSON;


## Описание


Свойство Transformation определяет
 трансформации сервиса для работы с экспресс-отчетом.


## Комментарии


Значение свойства устанавливается с помощью метода setTransformation,
 а возвращается с помощью метода getTransformation.
 Из JSON значение свойства задать нельзя.


Параметры метода setTransformation:


- report: PP.Exp.[EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm).
 Модель экспресс-отчета, которой устанавливаются трансформации;


- transformations: Array of
 Object. Массив объектов трансформации;


- transformOperation: PP.Exp.[TransfOperationType](../../../Enums/PP.Exp.TransfOperationType.htm).
 Тип операции;


- returnTransformations: Boolean.
 Признак получения всех трансформаций. Если для параметра установлено значение
 true, то в функцию обратного вызова
 будут возвращены все трансформации сервиса;


- callback: Function. Функция
 обратного вызова.


Параметры метода getTransformation:


- report: PP.Exp.[EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm).
 Модель экспресс-отчета, у которой получаются трансформации;


- dimKey: Number. Ключ измерения;


- dimElKey: Number. Ключ элемента
 измерения;


- transfKey: Number. Ключ трансформации;
 Если для параметра установлено значение null,
 то будут возвращены все трансформации сервиса;


- callback: Function. Функция
 обратного вызова.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TransformDialog](dhtmlUfe.chm::/Components/TransformDialog/TransformDialog.htm)
 с наименованием «dialog» (см. «[Пример
 создания компонента TransformDialog](dhtmlUfe.chm::/Components/TransformDialog/Example_TransformDialog.htm)»). Должно быть
 открыто измерение с ключом 109, а в данном измерении должен присутствовать
 элемент с ключом 225. В качестве этих ключей можно использовать собственные
 значения.


Добавим новую трансформацию в сервис экспресс-отчета, а затем определим
 формулу, соответствующую данной трансформации:


// Получаем документ экспресс-отчета
var source = expressBox.getSource();
// Получаем сервис для работы с экспресс-отчетом
var service = expressBox.getSource().getPPService();
var transformation;
var dimKey = 109;
var elemId = 225;
// Добавляем новую трансформацию в сервис экспресс-отчета
transformation = {
    enabled: true,
    expression: "2010",
    vis: true,
    elemId: elemId,
    dimkey: dimKey,
    k: 0,
    isFilter: false,
    formulaTransform: {
        calculationDirection: "Forward",
        calculationType: "Serie"
    }
}
// Устанавливаем данную трансформацию
service.setTransformation(source, [transformation], PP.Exp.TransfOperationType.Add, false);
// Получаем трансформацию
service.getTransformation(expressBox.getSource(), dimKey, elemId, null, function(sender,args) {
    var res = args && args.ResponseText && JSON.parse(args.ResponseText);
    var transformers = this._Items = PP.getProperty(res, 'GetEaxMdResult.meta.transformations.its.Item') || [];
    transformation = transformers[0];
    if(transformation) {
        console.log("Формула расчёта для элемента %s: %s", elemId, transformation.expression);
    }
});
В результате выполнения примера в консоли браузера была выведена формула
 расчёта для элемента с ключом 225:


Формула расчёта для элемента 225: 2010


Установим наименование для созданной трансформации и сохраним её настройки:


// Устанавливаем наименование трансформации
transformation.name = "Custom transformation";
if(transformation.isFilter) {
    // Обновляем настройки трансформации
    service.updateFilterTransformation(source, transformation);
} else {
    // Сохраняем настройки трансформации
    service.setTransformationState(source, PP.Exp.TransfType.CalcTransformations, PP.Exp.TransfState.Save, dimKey, elemId);
}
// Определяем наименование трансформации
var tKey;
service.getTransformation(expressBox.getSource(), dimKey, elemId, null, function(sender, args) {
    var res = args && args.ResponseText && JSON.parse(args.ResponseText);
    var transformers = this._Items = PP.getProperty(res, 'GetEaxMdResult.meta.transformations.its.Item') || [];
    console.log("Наименование трансформации: " + transformers[0].name);
    tKey = transformers[0].k;
});
В результате в консоль было выведено наименование обновленной трансформации:


Наименование трансформации: Custom transformation


Установим новую позицию трансформации в соответствующей коллекции:


// Устанавливаем новую позицию трансформации
service.setTransformationPos(source, tKey, 1);
В результате трансформация-фильтр была перемещена в коллекции.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
