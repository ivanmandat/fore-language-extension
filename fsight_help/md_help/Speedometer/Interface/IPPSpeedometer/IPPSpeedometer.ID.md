# IPPSpeedometer.ID

IPPSpeedometer.ID
-


# IPPSpeedometer.ID


## Синтаксис


ID: String;


## Описание


Свойство ID определяет идентификатор
 спидометра.


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором «ADHOC». Аналитическая панель должна содержать
 спидометр.


Добавьте ссылки на системные сборки: Adhoc, Express, Metabase и Speedometer.


	Sub UserProc;

	Var

	    Speedometer: IPPSpeedometer;

	    MB: IMetabase;

	    AdhocReport: IAdhocReport;

	    EaxSpeedometer: IEaxSpeedometer;

	    Enalyzer: IEaxAnalyzer;

	    DsObjs: IAdhocDataSourceObjects;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим аналитическую панель

	    AdhocReport := MB.ItemById("ADHOC").Bind As IAdhocReport;

	    // Получим источники данных аналитической панели

	    DsObjs := AdhocReport.DataSourceObjects;

	    // Получим спидометр

	    Enalyzer := DsObjs.Item(0).GetSourceObject As IEaxAnalyzer;

	    EaxSpeedometer := Enalyzer.Speedometer;

	    // Получим параметры спидометра

	    Speedometer := EaxSpeedometer.Speedometer;

	    Debug.WriteLine("Идентификатор спидометра: " + Speedometer.ID);

	    Debug.WriteLine("Ширина: " + Speedometer.Width.ToString);

	    Debug.WriteLine("Высота: " + Speedometer.Height.ToString);

	    Debug.WriteLine("Прозрачность спидометра: " + Speedometer.Opacity.ToString);

	End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены сообщения
 с информацией о идентификаторе, ширине и высоте спидометра, степени прозрачности
 спидометра.


См. также:


[IPPSpeedometer](IPPSpeedometer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
