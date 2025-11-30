# ISmPooledModel.CrossSection

ISmPooledModel.CrossSection
-


# ISmPooledModel.CrossSection


## Синтаксис


CrossSection: [PooledModelCrossSectionType](../../Enums/PooledModelCrossSectionType.htm);


## Описание


Свойство CrossSection определяет
 тип модели для регрессии на панельных данных.


## Комментарии


Модель со случайными эффектами не считается в Eviews, если заданы ARMA.


Если рассчитывается модель со случайными эффектами, т.е. ISmPooledModel.CrossSection
 = PooledModelCrossSectionType.RandomEffect, то нельзя задавать
 значение свойства [ISmPooledModel.ARMA](ISmPooledModel.ARMA.htm).


## Пример


Использование свойства приведено в примере для [ISmPooledModel.RandomEffectsMethod](ISmPooledModel.RandomEffectsMethod.htm).


См. также:


[ISmPooledModel](ISmPooledModel.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
