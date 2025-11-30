# EaxMdService.setDataSources

EaxMdService.setDataSources
-


**


# EaxMdService.setDataSources


## Синтаксис


setDataSources(analyzer: PP.Exp.[EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm),
 arrSources: Array, openParams: Array, openOptions: PP.Exp.[EaxDataSourceOpenMode](../../../Enums/EaxDataSourceOpenMode.htm),
 callback: PP.Delegate, fireEvent: Boolean, errCallback: PP.Delegate);


## Параметры


*analyzer.* Экспресс-отчет, для которого
 требуется установить источник данных;


*arrSources.* Массив [объектов
 метабазы](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm) или их ключей;


*openParams.* Хеш-массив
 параметров, с которыми требуется открыть источник данных;


*openOptions.* Определяет режим извлечения
 куба - с сохраненным представлением по умолчанию или только данных;


*callback.* Возвратная функция;


fireEvent. Признак вызова события
 [EaxMdService.MdLoaded](EaxMdService.MdLoaded.htm). Допустимые
 значения:


	- true. При выполнении
	 метода будет сгенерировано событие [EaxMdService.MdLoaded](EaxMdService.MdLoaded.htm);


	- false. При выполнении
	 метода данное событие не будет сгенерировано;


errCallback. Возвратная функция,
 выполняемая в случае ошибки.


## Описание


Метод setDataSources**
 устанавливает источник данных для куба.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Предполагается также наличие в репозитории
 базы данных временных рядов или куба с идентификатором «OBJ_TS_DB», который
 в следующем примере будет установлен в качестве источника данных экспресс-отчета:


// Получаем сервис для работы с экспресс-отчетом
var eaxMdService = expressBox._Service;
// Обрабатываем событие MdLoaded
eaxMdService.MdLoaded.add(function (sender, args) {
    if (args) {
        console.log("Загружен экспресс-отчёт «%s»", args.Source.getName());
    }
});
// Получаем документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Создаём ключ объекта метабазы, являющегося источником данных
var source = new PP.Mb.Object({
    Id: "OBJ_TS_DB"
});
source.setOdId("567854567896556");
// Определяем параметр возвратной функции
var dsArgs = new PP.Mb.Ui.PropertyChangedEventArgs({
    PropertyName: PP.Exp.Ui.ControlType.DataSources,
        Metadata: {
        Keys: [source]
    },
    TypeUpdateData: [PP.Exp.Ui.ViewTypeUpdate.DataView, PP.Exp.Ui.ViewTypeUpdate.Ribbon]
});
// Определяем возвратную функцию
var onSetDataSources = function (sender, args) {
    // Обновляем экспресс-отчет
    expressBox.refreshAll();
};
// Определяем функцию для обработки ошибки при задании нового источника данных
var onErrCallback = function (sender, args) {
    console.log("Ошибка при задании нового источника данных");
};
// Устанавливаем новый источник данных для куба
eaxMdService.setDataSources(eaxAnalyzer, [source], null, PP.Exp.EaxDataSourceOpenMode.None,
    PP.Delegate(onSetDataSources, this, dsArgs), true, PP.Delegate(onErrCallback, this));
В результате выполнения примера для текущего экспресс-отчета был установлен
 источник данных с идентификатором «OBJ_TS_DB». В консоли браузера было
 выведено наименование загруженного экспресс-отчёта:


Загружен экспресс-отчёт «Сравнение ВРП по регионам»


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
