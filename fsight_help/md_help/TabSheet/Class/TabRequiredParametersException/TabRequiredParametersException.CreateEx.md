# TabRequiredParametersException.CreateEx

TabRequiredParametersException.CreateEx
-


# TabRequiredParametersException.CreateEx


## Синтаксис


		CreateEx;


## Описание


Конструктор CreateEx создает
 экземпляр ошибки, возникающей при записи в ячейку таблицы функции без
 параметров и скобок.


## Комментарии


Данный конструктор предназначен для создания экземпляра ошибки с необходимым
 текстом. Текст сообщения локализован в системных ресурсах продукта «Форсайт. Аналитическая платформа»,
 поэтому сообщение, возвращаемое в свойстве [IException.Message](ForeSys.chm::/Interface/IException/IException.Message.htm),
 будет зависеть от используемого в текущий момент языка интерфейса.


## Пример


Использование конструктора приведено в примере для [ITabRequiredParametersException.SetFuncName](../../Interface/ITabRequiredParametersException/ITabRequiredParametersException.SetFuncName.htm).


См. также:


[TabRequiredParametersException](../../Interface/ITabRequiredParametersException/ITabRequiredParametersException.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
