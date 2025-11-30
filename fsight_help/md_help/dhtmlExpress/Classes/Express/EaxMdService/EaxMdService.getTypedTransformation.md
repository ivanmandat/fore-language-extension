# EaxMdService.getTypedTransformation

EaxMdService.getTypedTransformation
-


# EaxMdService.getTypedTransformation


## Синтаксис


getTypedTransformation(report: [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm),
 dimKey: number, dimElKey: string, transfKey: number, transfType: Som.EaxTransformationType,
 callback: ResponseDelegate);


## Параметры


Report. Документ экспресс-отчёта;


DimKey. Ключ измерения;


DimElKey. Ключ элемента измерения;


TransfKey. Ключ трансформации;


TransfType. Тип трансформации;


Callback. Возвратная функция.


## Описание


Метод getTypedTransformation
 возвращает коллекции трансформаций выбранного типа, заданных для элемента
 измерения.


## Комментарии


Значение свойства устанавливается с помощью метода [setTypedTransformation](EaxMdService.setTypedTransformation.htm),
 а возвращается с помощью метода getTypedTransformation.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TransformDialog](dhtmlUfe.chm::/Components/TransformDialog/TransformDialog.htm)
 с наименованием «dialog» (см.
 «[Пример
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
    service.setTypedTransformation(source, [transformation], PP.Exp.TransfOperationType.Add, false);
    service.getTypedTransformation(expressBox.getSource(), dimKey, elemId, null, function (sender, args) {
        var res = args && args.ResponseText && JSON.parse(args.ResponseText);
        var transformers = this._Items = PP.getProperty(res, 'GetEaxMdResult.meta.transformations.its.Item') || [];
        transformation = transformers[0];
    if (transformation) {
      console.log("Формула расчёта для элемента %s: %s", elemId, transformation.expression);
}
});


В результате выполнения примера в консоли браузера была выведена формула
 расчёта для элемента с ключом 225.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
