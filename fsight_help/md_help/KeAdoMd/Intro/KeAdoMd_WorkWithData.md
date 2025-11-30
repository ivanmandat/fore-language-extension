# Работа с кубами и справочниками ADOMD

Работа с кубами и справочниками ADOMD
-


# Работа с кубами и справочниками ADOMD


Кубы и справочники ADOMD являются дочерними объектами каталога ADOMD,
 поэтому обращение к ним из прикладного кода осуществляется по ключу, либо
 с использованием свойства [ItemByIdNamespace](KeSom.chm::/Interface/IMetabase/IMetabase.ItemByIdNamespace.htm).
 Для получения открытых экземпляров объектов, также как и при работе с
 объектами репозитория, предназначены методы [Open](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 или [OpenWithParam](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm).


## Кубы ADOMD


Структура куба ADOMD поддерживает интерфейс [ICubeModel](KeCubes.chm::/Interface/ICubeModel/ICubeModel.htm).
 Для совместимости с различными инструментами в «Форсайт. Аналитическая платформа»
 также реализована поддержка интерфейса [ICubeInstance](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.htm).
 Для этого у [открытого
 экземпляра куба ADOMD](../Interface/IAdoMdCubeInstance/IAdoMdCubeInstance.htm) можно использовать свойство [CubeInstance](../Interface/IAdoMdCubeInstance/IAdoMdCubeInstance.CubeInstance.htm).
 После получения экземпляра, описываемого интерфейсом [ICubeInstance](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.htm),
 можно получить [матрицу
 с фактическими данными](KeCubes.chm::/Interface/ICubeInstanceDestination/ICubeInstanceDestination.Execute.htm) куба или произвести какие-либо
 другие действия.


Рассмотрим пример создания экспресс-отчета на базе куба ADOMD:


	Sub CreateExpress;

	Var

	    MB: IMetabase;

	    CreateInfo: IMetabaseObjectCreateInfo;

	    Express: IEaxAnalyzer;

	    CubeAdoMd: IAdoMdCubeInstance;

	Begin

	    MB := MetabaseClass.Active;

	    //Информация для создания каталога ADOMD

	    CreateInfo := MB.CreateCreateInfo;

	    CreateInfo.Id := MB.GenerateId("ADOMDExpressReport");

	    CreateInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

	    CreateInfo.Parent := MB.ItemById("F_ADOMD");

	    //Создание экспресс-отчета

	    Express := MB.CreateObject(CreateInfo).Edit As IEaxAnalyzer;

	    //Получение открытого экземпляра куба ADOMD

	    CubeAdoMd := MB.ItemByIdNamespace("TEST", MB.GetObjectKeyById("MAS_TEST")).Open(Null) As IAdoMdCubeInstance;

	    //Установка куба в качестве источника данных для экспресс-отчета

	    Express.OpenCube(CubeAdoMd.CubeInstance);

	    (Express As IMetabaseObject).Save;

	End Sub CreateExpress;


При выполнении примера будет создан новый экспресс-отчет на базе указанного
 куба ADOMD. При открытии отчета куб выполнит все необходимые действия
 для извлечения данных, а экспресс-отчет отобразит их.


## Справочники ADOMD


Структура справочника ADOMD поддерживает интерфейс [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm).
 Для совместимости с различными инструментами продукта «Форсайт. Аналитическая платформа»
 также реализована поддержка интерфейса [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm).
 Для этого у [открытого
 экземпляра справочника ADOMD](../Interface/IAdoMdDimensionInstance/IAdoMdDimensionInstance.htm) можно использовать свойство [DimensionInstance](../Interface/IAdoMdDimensionInstance/IAdoMdDimensionInstance.DimensionInstance.htm).
 После получения экземпляра, описываемого интерфейсом [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm),
 можно работать с элементами измерения или произвести какие-либо другие
 действия.


Рассмотрим пример использования справочника ADOMD на форме и отображения
 его элементов в компоненте [DimensionTree](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DimensionTree.htm):


Для выполнения примера предполагается наличие формы и расположенных
 на ней компонентов UiDimension и DimensionTree с наименованиями «UiDimension1»
 и «DimensionTree1» соответственно. Для формы установим обработчик события
 OnCreate со следующим кодом:


	Class TESTForm: Form

	    UiDimension1: UiDimension;

	    DimensionTree1: DimensionTree;


	    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

	    Var

	        MB: IMetabase;

	        ADOMDDim: IAdoMdDimensionInstance;

	        DimInst: IDimInstance;

	    Begin

	        MB := MetabaseClass.Active;

	        ADOMDDim := MB.ItemByIdNamespace("TESTDIM", MB.GetObjectKeyById("MAS_TEST")).Open(Null) As IAdoMdDimensionInstance;

	        UiDimension1.Active := False;

	        UiDimension1.Instance := ADOMDDim.DimensionInstance;

	        DimensionTree1.Dimension := UiDimension1;

	    End Sub TESTFormOnCreate;


	End Class TESTForm;


При запуске формы будет получен открытый экземпляр справочника ADOMD.
 Данный экземпляр будет загружен в компонент «UiDimension1», который будет
 установлен в качестве источника данных для «DimensionTree1».


Справочники ADOMD используются не только кубами ADOMD. Они также могут
 использоваться и другими объектами репозитория: например, на базе справочников
 ADOMD может быть построен стандартный куб или справочник ADOMD может выступать
 в качестве элемента управления в регламентных отчетах.


См. также:


[Введение
 в сборку AdoMd](KeAdoMd_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
