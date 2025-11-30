# EaxAnalyzer.getDimOdId

EaxAnalyzer.getDimOdId
-


**


# EaxAnalyzer.getDimOdId


## Синтаксис


getDimOdId(dimKey: Number, sourceKey: Number, compoundDimKey:);


## Параметры


*dimKey.* Ключ измерения
 экспресс-отчета;


*sourceKey.* Ключ источника измерения;


*compoundDimKey.* Частные
 измерения экспресс-отчета в виде составного.


## Описание


Метод getDimOdId** возвращает
 моникёр для измерения экспресс-отчета.


## Комментарии


Метод возвращает моникёр вида {идентификатор_сессии}!{идентификатор_объекта}
 для измерения экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»), у источника данных экспресс-отчета
 должно быть хотя бы одно измерение. Определим ключ и наименование первого
 источника данных экспресс-отчёта, ключ куба из этого источника, а также
 ключ, моникёр и расположение первого измерения:


var eaxAnalyzer = expressBox.getSource();
var sourceKey;  // Ключ источника данных экспресс-отчёта
var cubeKey; // Ключ куба из источника данных экспресс-отчёта
// Проверяем, имеет ли экспресс-отчёт источники данных
if (eaxAnalyzer.hasDataSources()) {
    // Получаем источник измерения с индексом 0
    var dimSource = eaxAnalyzer.getDims()[0];
    if (dimSource != null) {
        // Получаем ключ источника измерения
        sourceKey = dimSource.getKey();
        // Получим наименование источника данных
        sourceName = eaxAnalyzer.getSourceKey();
        console.log("Ключ источника измерений: " + sourceKey);
        console.log("Название источника измерений: " + sourceName);
    };
    eaxAnalyzer._Metadata = eaxAnalyzer.getMetadata();
    // Получаем ключ первого источника данных экспресс-отчета
    var sourceKey = eaxAnalyzer.getMetadata().dataSources.its.it[0].k;
    console.log("Ключ первого источника данных: %s", sourceKey);
    console.log("Наименование первого источника данных: %s", eaxAnalyzer.getSourceKey());
    // Получаем ключ куба из первого источника данных экспресс-отчёта
    var sourceKey = eaxAnalyzer.getSourceKey(0);
    console.log("Ключ куба из первого источника данных: %s", sourceKey);
};
// Получаем измерения экспресс-отчета
var dims = eaxAnalyzer.getDims();
if (dims == null) {
    console.log("У данного экспресс-отчета отсутствуют измерения.")
} else {
    // Получаем ключ первого измерения экспресс-отчета
    var dimKey = dims[0].getKey();
    var dimOdId;
    // Получаем моникёр измерения по его ключу и ключу его источника
    if (cubeKey != null) {
        dimOdId = eaxAnalyzer.getDimOdId(dimKey, cubeKey);
    } else {
        dimOdId = eaxAnalyzer.getDimOdId(dimKey);
    };
    console.log("Ключ измерения: " + dimKey);
    console.log("Моникёр измерения: " + dimOdId.id);
    console.log("Положение измерения в кубе: " + eaxAnalyzer.getDimPosition(dimKey));
};
В результате выполнения примера в консоли браузера были выведены ключ
 и наименование первого источника данных экспресс-отчёта, ключ куба из
 этого источника, а также ключ, моникёр и расположение первого измерения:


Ключ первого источника данных: 2


Наименование первого источника данных: Актуальные
 данные Time series database


Ключ куба из первого источника данных: 3014


Ключ измерения: 1646


Моникёр измерения: HEGHGFBDBHDGEOAEEKJPFAMDGIGEAIKEKLOLMJFLFAMKEPBG!M!S!EMNONMACDBHDGEOAELFNJBLAHKJLHPDEENKECEHKIDCCDEDBL!1646


Положение измерения в кубе: Left


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
