# AccessSpecificatorKind

AccessSpecificatorKind
-


# AccessSpecificatorKind


## Описание


Перечисление AccessSpecificatorKind
 содержит список модификаторов доступа, доступных в языке Fore.


Используется следующими свойствами и методами:


	- [IForeClass.ClassAccessSpecificatorKind](../Interface/IForeClass/IForeClass.ClassAccessSpecificatorKind.htm);


	- [IForeSub.SubAccessSpecificatorKind](../Interface/IForeSub/IForeSub.SubAccessSpecificatorKind.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Private_. Конструкция
		 доступна только в контексте его объявления.


		 1
		 Protected_. Конструкция
		 доступна внутри класса/интерфейса, а также во всех классах/интерфейсах,
		 производных от данного.


		 2
		 Public_. Конструкция
		 доступна в любом месте текущего кода, во всех модулях/формах сборки,
		 а также там, где текущая сборка подключена по ссылке.


		 3
		 Friend_. Конструкция
		 доступна в любом месте кода текущей сборки. Конструкции с модификатором
		 Friend будут недоступны во внешних сборках.


		 4
		 ProtectedFriend. Конструкция
		 доступна в текущей сборке, а также из класса/интерфейса, производного
		 от данного, но находящегося в другой сборке.


См. также:


[Перечисления
 сборки Fore](KeFore_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
