# IEtlSource

IEtlSource
-


# IEtlSource


Сборка: Etl;


## Описание


Интерфейс IEtlSource представляет
 собой абстрактный интерфейс, описывающий возможные источники данных для
 компонента [EtlBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/EtlBox.htm).


## Иерархия наследования


IEtlSource


## Комментарии


Интерфейс не содержит собственных свойств и методов. В текущей реализации
 интерфейс IEtlSource поддерживает
 компонент [UiEtlObject](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiEtlObject.htm).


В указанном примере осуществляется настройка компонента UiEtlObject
 и указание его в качестве источника для компонента EtlBox.


	Sub SetSource;

	Var

	    MB: IMetabase;

	Begin

	    MB := MetabaseClass.Active;

	    UiEtlObject1.EtlTask := MB.ItemById("ETLTask").Bind As IEtlTask;

	    UiEtlObject1.Active := True;

	    EtlBox1.Source := UiEtlObject1 As IEtlSource;

	End Sub SetSource;


См. также:


[Интерфейсы
 сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
