# Term

Term
-


# Term


Пространство имен: PP.Ufe.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


Term


## Описание


Класс Term реализует терм, который
 используется в [редакторе
 термов](../../../Components/TermEdit/TermEdit.htm).


## Синтаксис


PP.initClass(PP.Ufe.Ui.Term, PP.[Object](dhtmlCommon.chm::/Classes/object/object.htm),
 "PP.Ufe.Ui.Term");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [Term](Constructor_Term.htm)
		 Конструктор Term создает
		 экземпляр класса Term.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Content](Term.Content.htm)
		 Свойство Content определяет
		 содержимое терма.


		 ![](../../../Property_Image.gif)
		 [DomNode](Term.DomNode.htm)
		 Свойство DomNode устанавливает
		 DOM-вершину терма.


		 ![](../../../Property_Image.gif)
		 [EndOffset](Term.EndOffset.htm)
		 Свойство EndOffset
		 содержит позицию последнего элемента терма в выражении.


		 ![](../../../Property_Image.gif)
		 [Formula](Term.Formula.htm)
		 Свойство Formula устанавливает
		 формулу терма.


		 ![](../../../Property_Image.gif)
		 [Selected](Term.Selected.htm)
		 Свойство Selected определяет,
		 выделен терм или нет.


		 ![](../../../Property_Image.gif)
		 [StartOffset](Term.StartOffset.htm)
		 Свойство StartOffset
		 содержит позицию первого элемента терма в выражении.


## Методы


		 Имя свойства
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [canEditFormula](Term.canEditFormula.htm)
		 Метод canEditFormula
		 определяет, можно ли редактировать формулу терма.


		 ![](../../../Sub_Image.gif)
		 [deleteFirstChar](Term.deleteFirstChar.htm)
		 Метод deleteFirstChar
		 удаляет первый символ терма.


		 ![](../../../Sub_Image.gif)
		 [deleteLastChar](Term.deleteLastChar.htm)
		 Метод deleteLastChar
		 удаляет последний символ терма.


		 ![](../../../Sub_Image.gif)
		 [getIsOneCharTerm](Term.getIsOneCharTerm.htm)
		 Метод getIsOneCharTerm проверяет,
		 является ли терм односимвольным.


		 ![](../../../Sub_Image.gif)
		 [keyDown](Term.keyDown.htm)
		 Метод keyDown обрабатывает
		 событие зажатия клавиши клавиатуры.


		 ![](../../../Sub_Image.gif)
		 [keyPress](Term.keyPress.htm)
		 Метод keyPress обрабатывает
		 событие нажатия клавиши клавиатуры.


		 ![](../../../Sub_Image.gif)
		 [slice](Term.slice.htm)
		 Метод slice переопределяет
		 нативный метод slice для манипулирования содержимым терма.


## События


		 Имя свойства
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [BecameEmpty](Term.BecameEmpty.htm)
		 Событие BecameEmpty
		 наступает после того, как терм становится пустым.


		 ![](../../../Event_Image.gif)
		 [EndDeletePressed](Term.EndDeletePressed.htm)
		 Событие EndDeletePressed
		 наступает после нажатия клавиши DELETE, когда курсор располагается
		 после последнего символа терма.


		 ![](../../../Event_Image.gif)
		 [Splitted](Term.Splitted.htm)
		 Событие Splitted наступает
		 после разделения терма.


		 ![](../../../Event_Image.gif)
		 [StartBackspacePressed](Term.StartBackspacePressed.htm)
		 Событие StartBackspacePressed
		 наступает после нажатия кнопки BACKSPACE, когда курсор располагается
		 перед первым символом терма.


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP.Ufe.Ui](../../PP.Ufe.Ui.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
