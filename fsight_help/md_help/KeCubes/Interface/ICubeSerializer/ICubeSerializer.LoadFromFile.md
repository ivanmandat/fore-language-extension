# ICubeSerializer.LoadFromFile

ICubeSerializer.LoadFromFile
-


# ICubeSerializer.LoadFromFile


## Синтаксис


LoadFromFile(FileName: String; [Options: Integer
 = 0]): [ICubeSerialInstance](../ICubeSerialInstance/ICubeSerialInstance.htm);


## Параметры


FileName. Путь и наименование
 файла, из которого осуществляется загрузка;


Options. Параметр не используется.


## Описание


Метод LoadFromFile осуществляет
 загрузку куба, сохранённого в файл.


## Пример


Для выполнения примера предполагается наличие в репозитории формы и
 файла с наименованием cub.ppcube в корневом каталоге диска С. Файл с расширением
 *.ppcube формируется при экспорте экспресс-отчёта, содержащего сохранённое
 представление данных куба. Разместите на форме компоненты [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm),
 [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm)
 с наименованиями «Button1», «UiErAnalyzer1» соответственно.


Добавьте ссылки на системные сборки: Cubes, Express, Forms, Matrix,
 Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    CubS: ICubeSerializer;

	    CubSIns: ICubeSerialInstance;

	    MatDs: IMatrixDataSource;

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Создадим загрузчик куба из файла

	    CubS := New CubeSerializer.Create As ICubeSerializer;

	    // Загрузим куб из файла

	    CubSIns := CubS.LoadFromFile("c:\cub.ppcube");

	    // Получим коллекцию вариантов отображения куба

	    MatDS := CubSIns.Destinations.Item(0) As IMatrixDataSource;

	    // Создадим временный экспресс-отчёт

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.Id := "EXPRESS";

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

	    MObj := MB.CreateObject(CrInfo).Bind;

	    // Отобразим экспресс-отчёт

	    UiErAnalyzer1.Active := True;

	    UiErAnalyzer1.ErAnalyzer := MObj As IEaxAnalyzer;

	    UiErAnalyzer1.ErAnalyzer.OpenMatrixDataSource(MatDS);

	End Sub Button1OnClick;


После выполнения примера, при нажатии на кнопку осуществляется загрузка
 куба, сохранённого в файл cub.ppcube. Для загрузки данных в «UiErAnalyzer1»
 создаётся временный экспресс-отчёт.


См. также:


[ICubeSerializer](ICubeSerializer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
