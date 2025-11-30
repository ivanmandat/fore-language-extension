# GetFormulaEditorInfo: Операция

GetFormulaEditorInfo: Операция
-


**


# GetFormulaEditorInfo


## Синтаксис


GetFormulaEditorInfoResult GetFormulaEditorInfo(MbId
 tMb, GetFormulaEditorInfoArg tArg)


## Параметры


tMb. Моникёр соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetFormulaEditorInfo
 получения списка функций, которые могут использоваться для составления
 выражений в различных инструментах продукта «Форсайт. Аналитическая платформа».


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр соединения с репозиторием и в поле tArg.pattern
 шаблон, в соответствии с которым будет получена информация о функциях.
 Моникёр может быть получен при выполнении операции [OpenMetabase](OpenMetabase.htm).


Результатом операции будет список функций. Для каждой функции будут
 доступны, наименование, описание, синтаксис и другие дополнительные параметры.
 Полученные функции могут использоваться для составления различных выражений
 в текстовом виде или в операции [SetExp](SetExp.htm).
 Для использования функции в выражении задайте необходимые параметры в
 соответствии с синтаксисом, который будет доступен в поле item.arguments.


## Пример


Ниже приведён пример использования операции GetFormulaEditorInfo
 для получения списка функций, которые могут быть использованы в выражениях
 при работе с ADOMD-кубами.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetFormulaEditorInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xmlns="****">
  <id>S1!M</id>  </tMb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <userRPath>true</userRPath>  <isRExist>true</isRExist>  <formulaEditorFunctions>Adomd</formulaEditorFunctions>  </pattern>
  </tArg>
  </GetFormulaEditorInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetFormulaEditorInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <userRPath />
  <isRExist>0</isRExist>[![](../../minus.gif)](../../#)<formulaEditorFunctions>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<Item>
  <category>Время</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>Ytd</name>  <description>Возвращает набор элементов с общим родителем, находящихся на том же уровне, что и данный элемент, начиная с первого такого элемента и заканчивая данным элементом, в соответствии с ограничениями уровня Year в измерении Time.</description>  <arguments>Ytd( [ Member_Expression*] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Время</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>QTD</name>  <description>Возвращает набор элементов с общим родителем, находящихся на том же уровне, что и данный элемент, начиная с первого такого элемента и заканчивая данным элементом, в соответствии с ограничениями уровня Quarter в измерении Time.</description>  <arguments>Qtd( [ Member_Expression ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Время</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>MTD</name>  <description>Возвращает набор элементов с общим родителем, находящихся на том же уровне, что и данный элемент, начиная с первого такого элемента и заканчивая данным элементом, в соответствии с ограничениями уровня Month в измерении Time.</description>  <arguments>Mtd( [ Member_Expression ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Время</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>PARALLELPERIOD</name>  <description>Возвращает элемент предыдущего периода, расположенный в той же относительной позиции, что и заданный элемент. Несмотря на сходство с функцией Cousin, функция ParallelPeriod более тесно связана с временным рядом. Функция ParallelPeriod берет предок указанного выражения на заданном уровне, находит родственный элемент предка, отстающий на заданное число периодов, и возвращает параллельный период среди потомков этого родственного элемента.</description>  <arguments>ParallelPeriod( [ Level_Expression [ ,Index [ , Member_Expression ] ] ])</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Время</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>PERIODSTODATE</name>  <description>Возвращает набор элементов с общим родителем, находящихся на том же уровне, что и данный элемент, начиная с первого такого элемента и заканчивая данным элементом, в соответствии с ограничениями заданного уровня в измерении Time.</description>  <arguments>PeriodsToDate( [ Level_Expression [ ,Member_Expression ] ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Время</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>LASTPERIOD</name>  <description>Возвращает набор элементов до указанного элемента включительно.</description>  <arguments>LastPeriods(Index, [Member_Expression ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Время</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>OPENINGPERIOD</name>  <description>Возвращает первый родственный элемент среди потомков указанного уровня; по желанию можно указать элемент, потомок которого будет возвращаться.</description>  <arguments>OpeningPeriod( [ Level_Expression ] , [ Member_Expression ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Время</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>CLOSINGPERIOD</name>  <description>Возвращает последний элемент среди потомков указанного элемента на указанном уровне.</description>  <arguments>ClosingPeriod( [ Level_Expression ] , [ Member_Expression ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>TOPCOUNT</name>  <description>Сортирует набор по убыванию и возвращает заданное число элементов с самыми высокими значениями.</description>  <arguments>TopCount(Set_Expression,Count, [ Numeric_Expression ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>BOTTOMCOUNT</name>  <description>Сортирует набор в порядке возрастания и возвращает указанное число кортежей набора с минимальными значениями.</description>  <arguments>BottomCount(Set_Expression,Count, [ Numeric_Expression ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>CROSSJOIN</name>  <description>Возвращает перекрестное произведение двух или нескольких наборов.</description>  <arguments>Standard syntax: Crossjoin(Set_Expression1 ,Set_Expression2 [,...n] ); Alternate syntax: Set_Expression1 * Set_Expression2 [* ...n]</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>DESCENDANTS</name>  <description>Возвращает набор потомков элемента на указанном уровне или расстоянии, по желанию включая или исключая потомков на других уровнях.</description>  <arguments>Descendants(Member_Expression , [ Level_Expression] ,Desc_Flag ] ); Descendants(Member_Expression  , [Distance ] ,Desc_Flag ] ); Descendants(Set_Expression  , [Level_Expression] ,Desc_Flag ]  ); Descendants(Set_Expression  , [ Distance ], Desc_Flag ] ); Distance - Допустимое числовое выражение, указывающее расстояние от заданного элемента. Desc_Flag** - Допустимая строка выражения, указывающая описание флага, коррелирующего с возможными наборами потомков.</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>DISTINCT</name>  <description>Вычисляет заданный набор, удаляя из него повторяющиеся кортежи, и возвращает результирующий набор.</description>  <arguments>Distinct(Set_Expression)</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>EXCEPT</name>  <description>Обрабатывает два набора и удаляет кортежи из первого набора, существующие во втором наборе, сохраняя при необходимости одинаковые элементы.</description>  <arguments>Except(Set_Expression1, Set_Expression2, [ ALL ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format>% </format>  <dontCheckInParser>1</dontCheckInParser>  <name>EXISTING</name>  <description>Указывает, что заданный набор должен вычисляться принудительно в текущем контексте.</description>  <arguments>Existing Set_Expression</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>EXISTS</name>  <description>Возвращает набор кортежей первого указанного набора, которые один или более раз встречаются во втором наборе. Эта функция вручную выполняет операцию автоматической проверки. Если указан необязательный аргумент [имя группы="" мер=""], функция возвращает кортежи, встречающиеся один или несколько раз во втором наборе и имеющие соответствующие строки в таблице фактов заданной группы мер.</description>  <arguments>Exists( Set_Expression1 , Set_Expression2 , [ MeasureGroupName] ); MeasureGroupName - Допустимое строковое выражение, обозначающее имя группы мер.</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>EXTRACT</name>  <description>Возвращает набор кортежей из извлеченных элементов иерархии.</description>  <arguments>Extract(Set_Expression, Hierarchy_Expression1 [,Hierarchy_Expression2, ...n] ); Hierarchy_Expression - допустимое многомерное выражение, которое возвращает иерархию.</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>FILTER</name>  <description>Возвращает набор, получающийся в результате фильтрации заданного набора на основе условия поиска.</description>  <arguments>Format(Set_Expression, Logical_Expression ); Logical_Expression - Допустимое многомерное выражение иерархии, принимающее значение «true» или «false».</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>GENERATE</name>  <description>Применяет набор к каждому элементу другого набора и соединяет результирующие наборы. В качестве альтернативы эта функция также возвращает объединенную строку, созданную путем вычисления строкового выражения по набору.</description>  <arguments>Generate( Set_Expression1 ,  Set_Expression2,  [  ALL ]  ); Generate( Set_Expression1 ,  String_Expression ,[ Delimiter ]  ); Delimiter - Допустимый разделитель в виде строкового выражения."</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>HEAD</name>  <description>Возвращает указанное количество первых элементов набора, сохраняя повторяющиеся элементы.</description>  <arguments>Head(Set_Expression  , [Count ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>HIERARCHIZE</name>  <description>Упорядочивает элементы набора в иерархии.</description>  <arguments>Hierarchize(Set_Expression  ,[ POST ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>INTERSECT</name>  <description>Возвращает пересечение двух входных наборов, при необходимости сохраняя повторяющиеся элементы.</description>  <arguments>Intersect(Set_Expression1 , Set_Expression2  ,[ ALL ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>NONEMPTY</name>  <description>Возвращает набор непустых кортежей из заданного набора, основываясь на прямом произведении заданного набора со вторым набором.</description>  <arguments>NONEMPTY(set_expression1 , [set_expression2])</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>ORDER</name>  <description>Упорядочивает элементы указанного набора, по выбору сохраняя или нарушая иерархию.</description>  <arguments>Order(Set_Expression, Numeric_Expression [ , { ASC | DESC | BASC | BDESC } ] ); Order(Set_Expression, String_Expression [ , { ASC | DESC | BASC | BDESC } ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>TAIL</name>  <description>Возвращает подмножество из конца набора.</description>  <arguments>Tail(Set_Expression [ ,Count ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Множества</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>UNION</name>  <description>Возвращает набор, порожденный объединением двух наборов, по желанию сохраняя повторяющиеся элементы.</description>  <arguments>Union(Set_Expression1, Set_Expression2 [,...n][, ALL]) или Set_Expression1 + Set_Expression2 [+...n] или {Set_Expression1 , Set_Expression2 [,...n]}</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Статистика</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>SUM</name>  <description>Возвращает сумму числового выражения, вычисленную по указанному набору.</description>  <arguments>Sum( Set_Expression [ , Numeric_Expression ] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Статистика</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>COALESCEEMPTY</name>  <description>Преобразовывает значения пустых ячеек в заданные непустые значения, которые могут быть числами или строками.</description>  <arguments>CoalesceEmpty( Numeric_Expression1 [ ,Numeric_Expression2,...n] ) или CoalesceEmpty(String_Expression1 [ ,String_Expression2,...n] )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Статистика</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>COUNT</name>  <description>Возвращает количество ячеек в наборе.</description>  <arguments>Count(Set_Expression [ , ( EXCLUDEEMPTY | INCLUDEEMPTY ) ] ) или Set_Expression.Count</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Статистика</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>DISTINCTCOUNT</name>  <description>Возвращает количество неодинаковых, непустых кортежей в наборе.</description>  <arguments>DistinctCount(Set_Expression)</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Статистика</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>RANK</name>  <description>Возвращает ранг (начиная с единицы) указанного кортежа в указанном наборе.</description>  <arguments>Rank(Tuple_Expression, Set_Expression [ ,Numeric Expression ] ); Tuple_Expression - Допустимое многомерное выражение, возвращающее кортеж.</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>ANCESTOR</name>  <description>Функция, возвращающая предок заданного элемента на заданном уровне или предок, который находится выше по иерархии на заданном расстоянии.</description>  <arguments>Ancestor(Member_Expression, Level_Expression) или Ancestor(Member_Expression, Distance); Distance - Допустимое числовое выражение, указывающее расстояние от заданного элемента.</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>ANCESTORS</name>  <description>Функция, возвращающая набор предков заданного элемента на заданном уровне или заданном расстоянии от элемента. В службах Microsoft SQL Server Analysis Services возвращаемый набор всегда будет содержать один элемент — службы Analysis Services не поддерживают нескольких родителей для одного элемента.</description>  <arguments>"Ancestors(Member_Expression, Level_Expression) или Ancestors(Member_Expression, Distance); Distance - Допустимое числовое выражение, указывающее расстояние от заданного элемента.</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>ASCENDANTS</name>  <description>Возвращает набор родителей указанного элемента, включая его самого.</description>  <arguments>Ascendants(Member_Expression)</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%</format>  <dontCheckInParser>1</dontCheckInParser>  <name>CHILDREN</name>  <description>Возвращает набор потомков указанного элемента.</description>  <arguments>Member_Expression.Children</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>COUSIN</name>  <description>Возвращает дочерний элемент, позиция которого относительно родительского элемента совпадает с позицией заданного дочернего элемента.</description>  <arguments>Cousin( Member_Expression , Ancestor_Member_Expression ); Ancestor_Member_Expression - допустимое многомерное выражение элемента, возвращающее элемент-предок.</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%</format>  <dontCheckInParser>1</dontCheckInParser>  <name>CURRENT</name>  <description>Возвращает текущий кортеж из набора во время выполнения цикла.</description>  <arguments>Set_Expression.Current</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%</format>  <dontCheckInParser>1</dontCheckInParser>  <name>FIRSTCHILD</name>  <description>Возвращает первого потомка заданного элемента.</description>  <arguments>Member_Expression.FirstChild</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%</format>  <dontCheckInParser>1</dontCheckInParser>  <name>FIRSTSIBLING</name>  <description>Возвращает первого потомка предка заданного элемента.</description>  <arguments>Member_Expression.FirstSibling</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>ISANCESTOR</name>  <description>Возвращает значение, сообщающее, является ли заданный элемент предком другого заданного элемента.</description>  <arguments>IsAncestor(Member_Expression1, Member_Expression2)</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>ISGENERATION</name>  <description>Возвращает значение, сообщающее, принадлежит ли заданный элемент указанному поколению.</description>  <arguments>"IsGeneration(Member_Expression, Generation_Number); Generation_Number - допустимое числовое выражение, указывающее поколение, для которого заданный элемент будет вычисляться.</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>ISLEAF</name>  <description>Возвращает значение, сообщающее, является ли элемент конечным.</description>  <arguments>IsLeaf(Member_Expression)</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>ISSIBLING</name>  <description>Возвращает значение, сообщающее, имеет ли указанный элемент общего родителя с другим указанным элементом.</description>  <arguments>IsSibling(Member_Expression1, Member_Expression2)</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%(&)</format>  <dontCheckInParser>1</dontCheckInParser>  <name>LAG</name>  <description>Возвращает элемент, который находится на указанное количество позиций ранее заданного элемента на его уровне.</description>  <arguments>Member_Expression.Lag(Index)</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%</format>  <dontCheckInParser>1</dontCheckInParser>  <name>LASTCHILD</name>  <description>Возвращает последний дочерний элемент указанного элемента.</description>  <arguments>Member_Expression.LastChild</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%</format>  <dontCheckInParser>1</dontCheckInParser>  <name>LASTSIBLING</name>  <description>Возвращает последний дочерний элемент родителя указанного элемента.</description>  <arguments>Member_Expression.LastSibling</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%(&)</format>  <dontCheckInParser>1</dontCheckInParser>  <name>LEAD</name>  <description>Возвращает элемент, который следует за заданным элементом через указанное число позиций на уровне элемента.</description>  <arguments>Member_Expression.Lead( Index )</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>LINKMEMBER</name>  <description>Возвращает элемент, эквивалентный заданному элементу в указанной иерархии.</description>  <arguments>LinkMember(Member_Expression, Hierarchy_Expression)</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format />
  <dontCheckInParser>1</dontCheckInParser>  <name>LOOKUPCUBE</name>  <description>Возвращает значение многомерных выражений, вычисленное для другого указанного куба в той же базе данных.</description>  <arguments>LookupCube(Cube_Name, Numeric_Expression ) или LookupCube(Cube_Name, String_Expression ); Cube_Name - Допустимое строковое выражение, обозначающее имя куба.</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%</format>  <dontCheckInParser>1</dontCheckInParser>  <name>CURRENTMEMBER</name>  <description>Возвращает текущий элемент уровня, содержащего заданный элемент.</description>  <arguments>Member_Expression.CurrentMember</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%</format>  <dontCheckInParser>1</dontCheckInParser>  <name>NEXTMEMBER</name>  <description>Возвращает следующий элемент уровня, содержащего заданный элемент.</description>  <arguments>Member_Expression.NextMember</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%</format>  <dontCheckInParser>1</dontCheckInParser>  <name>PREVMEMBER</name>  <description>Возвращает предыдущий элемент уровня, содержащего заданный элемент.</description>  <arguments>Member_Expression.PrevMember</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Навигация</category>  <format>.%</format>  <dontCheckInParser>1</dontCheckInParser>  <name>SIBLINGS</name>  <description>Возвращает элементы, имеющие общего родителя с указанным элементом, включая сам элемент.</description>  <arguments>Member_Expression.Siblings</arguments>  <showFullDescriptionLink>1</showFullDescriptionLink>  <userFunction>0</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
[![](../../minus.gif)](../../#)<Item>
  <category>Мои функции</category>  <format />
  <dontCheckInParser>0</dontCheckInParser>  <name>MyFunc1</name>  <description>MyFunc1</description>  <arguments>MyFunc1(Input:ITimeSeries, Input1:ITimeSeries, Coef:Double)</arguments>  <showFullDescriptionLink>0</showFullDescriptionLink>  <userFunction>1</userFunction>  <calendarFunction>0</calendarFunction>  </Item>
  </its>
  </formulaEditorFunctions>
  </meta>
  </GetFormulaEditorInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "GetFormulaEditorInfo" :
  {
   "tMb" :
    {
     "id" : "S1!M"
    },
   "tArg" :
    {
     "pattern" :
      {
       "userRPath" : "true",
       "isRExist" : "true",
       "formulaEditorFunctions" : "Adomd"
      }
    }
  }
}

### JSON-ответ:


{
 "GetFormulaEditorInfoResult" :
  {
   "meta" :
    {
     "userRPath" : "",
     "isRExist" : "0",
     "formulaEditorFunctions" :
      {
       "its" :
        {
         "Item" :
          [
            {
             "category" : "Время",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "Ytd",
             "description" : "Возвращает набор элементов с общим родителем, находящихся на том же уровне, что и данный элемент, начиная с первого такого элемента и заканчивая данным элементом, в соответствии с ограничениями уровня Year в измерении Time.",
             "arguments" : "Ytd( [ Member_Expression*] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Время",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "QTD",
             "description" : "Возвращает набор элементов с общим родителем, находящихся на том же уровне, что и данный элемент, начиная с первого такого элемента и заканчивая данным элементом, в соответствии с ограничениями уровня Quarter в измерении Time.",
             "arguments" : "Qtd( [ Member_Expression ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Время",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "MTD",
             "description" : "Возвращает набор элементов с общим родителем, находящихся на том же уровне, что и данный элемент, начиная с первого такого элемента и заканчивая данным элементом, в соответствии с ограничениями уровня Month в измерении Time.",
             "arguments" : "Mtd( [ Member_Expression ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Время",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "PARALLELPERIOD",
             "description" : "Возвращает элемент предыдущего периода, расположенный в той же относительной позиции, что и заданный элемент. Несмотря на сходство с функцией Cousin, функция ParallelPeriod более тесно связана с временным рядом. Функция ParallelPeriod берет предок указанного выражения на заданном уровне, находит родственный элемент предка, отстающий на заданное число периодов, и возвращает параллельный период среди потомков этого родственного элемента.",
             "arguments" : "ParallelPeriod( [ Level_Expression [ ,Index [ , Member_Expression ] ] ])",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Время",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "PERIODSTODATE",
             "description" : "Возвращает набор элементов с общим родителем, находящихся на том же уровне, что и данный элемент, начиная с первого такого элемента и заканчивая данным элементом, в соответствии с ограничениями заданного уровня в измерении Time.",
             "arguments" : "PeriodsToDate( [ Level_Expression [ ,Member_Expression ] ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Время",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "LASTPERIOD",
             "description" : "Возвращает набор элементов до указанного элемента включительно.",
             "arguments" : "LastPeriods(Index, [Member_Expression ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Время",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "OPENINGPERIOD",
             "description" : "Возвращает первый родственный элемент среди потомков указанного уровня; по желанию можно указать элемент, потомок которого будет возвращаться.",
             "arguments" : "OpeningPeriod( [ Level_Expression ] , [ Member_Expression ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Время",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "CLOSINGPERIOD",
             "description" : "Возвращает последний элемент среди потомков указанного элемента на указанном уровне.",
             "arguments" : "ClosingPeriod( [ Level_Expression ] , [ Member_Expression ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "TOPCOUNT",
             "description" : "Сортирует набор по убыванию и возвращает заданное число элементов с самыми высокими значениями.",
             "arguments" : "TopCount(Set_Expression,Count, [ Numeric_Expression ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "BOTTOMCOUNT",
             "description" : "Сортирует набор в порядке возрастания и возвращает указанное число кортежей набора с минимальными значениями.",
             "arguments" : "BottomCount(Set_Expression,Count, [ Numeric_Expression ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "CROSSJOIN",
             "description" : "Возвращает перекрестное произведение двух или нескольких наборов.",
             "arguments" : "Standard syntax: Crossjoin(Set_Expression1 ,Set_Expression2 [,...n] ); Alternate syntax: Set_Expression1 * Set_Expression2 [* ...n]",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "DESCENDANTS",
             "description" : "Возвращает набор потомков элемента на указанном уровне или расстоянии, по желанию включая или исключая потомков на других уровнях.",
             "arguments" : "Descendants(Member_Expression , [ Level_Expression] ,Desc_Flag ] ); Descendants(Member_Expression  , [Distance ] ,Desc_Flag ] ); Descendants(Set_Expression  , [Level_Expression] ,Desc_Flag ]  ); Descendants(Set_Expression  , [ Distance ], Desc_Flag ] ); Distance - Допустимое числовое выражение, указывающее расстояние от заданного элемента. Desc_Flag** - Допустимая строка выражения, указывающая описание флага, коррелирующего с возможными наборами потомков.",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "DISTINCT",
             "description" : "Вычисляет заданный набор, удаляя из него повторяющиеся кортежи, и возвращает результирующий набор.",
             "arguments" : "Distinct(Set_Expression)",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "EXCEPT",
             "description" : "Обрабатывает два набора и удаляет кортежи из первого набора, существующие во втором наборе, сохраняя при необходимости одинаковые элементы.",
             "arguments" : "Except(Set_Expression1, Set_Expression2, [ ALL ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "% ",
             "dontCheckInParser" : "1",
             "name" : "EXISTING",
             "description" : "Указывает, что заданный набор должен вычисляться принудительно в текущем контексте.",
             "arguments" : "Existing Set_Expression",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "EXISTS",
             "description" : "Возвращает набор кортежей первого указанного набора, которые один или более раз встречаются во втором наборе. Эта функция вручную выполняет операцию автоматической проверки. Если указан необязательный аргумент [имя группы="" мер=""], функция возвращает кортежи, встречающиеся один или несколько раз во втором наборе и имеющие соответствующие строки в таблице фактов заданной группы мер.",
             "arguments" : "Exists( Set_Expression1 , Set_Expression2 , [ MeasureGroupName] ); MeasureGroupName - Допустимое строковое выражение, обозначающее имя группы мер.",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "EXTRACT",
             "description" : "Возвращает набор кортежей из извлеченных элементов иерархии.",
             "arguments" : "Extract(Set_Expression, Hierarchy_Expression1 [,Hierarchy_Expression2, ...n] ); Hierarchy_Expression - допустимое многомерное выражение, которое возвращает иерархию.",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "FILTER",
             "description" : "Возвращает набор, получающийся в результате фильтрации заданного набора на основе условия поиска.",
             "arguments" : "Format(Set_Expression, Logical_Expression ); Logical_Expression - Допустимое многомерное выражение иерархии, принимающее значение «true» или «false».",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "GENERATE",
             "description" : "Применяет набор к каждому элементу другого набора и соединяет результирующие наборы. В качестве альтернативы эта функция также возвращает объединенную строку, созданную путем вычисления строкового выражения по набору.",
             "arguments" : "Generate( Set_Expression1 ,  Set_Expression2,  [  ALL ]  ); Generate( Set_Expression1 ,  String_Expression ,[ Delimiter ]  ); Delimiter - Допустимый разделитель в виде строкового выражения."",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "HEAD",
             "description" : "Возвращает указанное количество первых элементов набора, сохраняя повторяющиеся элементы.",
             "arguments" : "Head(Set_Expression  , [Count ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "HIERARCHIZE",
             "description" : "Упорядочивает элементы набора в иерархии.",
             "arguments" : "Hierarchize(Set_Expression  ,[ POST ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "INTERSECT",
             "description" : "Возвращает пересечение двух входных наборов, при необходимости сохраняя повторяющиеся элементы.",
             "arguments" : "Intersect(Set_Expression1 , Set_Expression2  ,[ ALL ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "NONEMPTY",
             "description" : "Возвращает набор непустых кортежей из заданного набора, основываясь на прямом произведении заданного набора со вторым набором.",
             "arguments" : "NONEMPTY(set_expression1 , [set_expression2])",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "ORDER",
             "description" : "Упорядочивает элементы указанного набора, по выбору сохраняя или нарушая иерархию.",
             "arguments" : "Order(Set_Expression, Numeric_Expression [ , { ASC | DESC | BASC | BDESC } ] ); Order(Set_Expression, String_Expression [ , { ASC | DESC | BASC | BDESC } ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "TAIL",
             "description" : "Возвращает подмножество из конца набора.",
             "arguments" : "Tail(Set_Expression [ ,Count ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Множества",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "UNION",
             "description" : "Возвращает набор, порожденный объединением двух наборов, по желанию сохраняя повторяющиеся элементы.",
             "arguments" : "Union(Set_Expression1, Set_Expression2 [,...n][, ALL]) или Set_Expression1 + Set_Expression2 [+...n] или {Set_Expression1 , Set_Expression2 [,...n]}",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Статистика",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "SUM",
             "description" : "Возвращает сумму числового выражения, вычисленную по указанному набору.",
             "arguments" : "Sum( Set_Expression [ , Numeric_Expression ] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Статистика",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "COALESCEEMPTY",
             "description" : "Преобразовывает значения пустых ячеек в заданные непустые значения, которые могут быть числами или строками.",
             "arguments" : "CoalesceEmpty( Numeric_Expression1 [ ,Numeric_Expression2,...n] ) или CoalesceEmpty(String_Expression1 [ ,String_Expression2,...n] )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Статистика",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "COUNT",
             "description" : "Возвращает количество ячеек в наборе.",
             "arguments" : "Count(Set_Expression [ , ( EXCLUDEEMPTY | INCLUDEEMPTY ) ] ) или Set_Expression.Count",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Статистика",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "DISTINCTCOUNT",
             "description" : "Возвращает количество неодинаковых, непустых кортежей в наборе.",
             "arguments" : "DistinctCount(Set_Expression)",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Статистика",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "RANK",
             "description" : "Возвращает ранг (начиная с единицы) указанного кортежа в указанном наборе.",
             "arguments" : "Rank(Tuple_Expression, Set_Expression [ ,Numeric Expression ] ); Tuple_Expression - Допустимое многомерное выражение, возвращающее кортеж.",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "ANCESTOR",
             "description" : "Функция, возвращающая предок заданного элемента на заданном уровне или предок, который находится выше по иерархии на заданном расстоянии.",
             "arguments" : "Ancestor(Member_Expression, Level_Expression) или Ancestor(Member_Expression, Distance); Distance - Допустимое числовое выражение, указывающее расстояние от заданного элемента.",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "ANCESTORS",
             "description" : "Функция, возвращающая набор предков заданного элемента на заданном уровне или заданном расстоянии от элемента. В службах Microsoft SQL Server Analysis Services возвращаемый набор всегда будет содержать один элемент — службы Analysis Services не поддерживают нескольких родителей для одного элемента.",
             "arguments" : ""Ancestors(Member_Expression, Level_Expression) или Ancestors(Member_Expression, Distance); Distance - Допустимое числовое выражение, указывающее расстояние от заданного элемента.",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "ASCENDANTS",
             "description" : "Возвращает набор родителей указанного элемента, включая его самого.",
             "arguments" : "Ascendants(Member_Expression)",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%",
             "dontCheckInParser" : "1",
             "name" : "CHILDREN",
             "description" : "Возвращает набор потомков указанного элемента.",
             "arguments" : "Member_Expression.Children",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "COUSIN",
             "description" : "Возвращает дочерний элемент, позиция которого относительно родительского элемента совпадает с позицией заданного дочернего элемента.",
             "arguments" : "Cousin( Member_Expression , Ancestor_Member_Expression ); Ancestor_Member_Expression - допустимое многомерное выражение элемента, возвращающее элемент-предок.",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%",
             "dontCheckInParser" : "1",
             "name" : "CURRENT",
             "description" : "Возвращает текущий кортеж из набора во время выполнения цикла.",
             "arguments" : "Set_Expression.Current",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%",
             "dontCheckInParser" : "1",
             "name" : "FIRSTCHILD",
             "description" : "Возвращает первого потомка заданного элемента.",
             "arguments" : "Member_Expression.FirstChild",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%",
             "dontCheckInParser" : "1",
             "name" : "FIRSTSIBLING",
             "description" : "Возвращает первого потомка предка заданного элемента.",
             "arguments" : "Member_Expression.FirstSibling",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "ISANCESTOR",
             "description" : "Возвращает значение, сообщающее, является ли заданный элемент предком другого заданного элемента.",
             "arguments" : "IsAncestor(Member_Expression1, Member_Expression2)",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "ISGENERATION",
             "description" : "Возвращает значение, сообщающее, принадлежит ли заданный элемент указанному поколению.",
             "arguments" : ""IsGeneration(Member_Expression, Generation_Number); Generation_Number - допустимое числовое выражение, указывающее поколение, для которого заданный элемент будет вычисляться.",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "ISLEAF",
             "description" : "Возвращает значение, сообщающее, является ли элемент конечным.",
             "arguments" : "IsLeaf(Member_Expression)",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "ISSIBLING",
             "description" : "Возвращает значение, сообщающее, имеет ли указанный элемент общего родителя с другим указанным элементом.",
             "arguments" : "IsSibling(Member_Expression1, Member_Expression2)",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%(&)",
             "dontCheckInParser" : "1",
             "name" : "LAG",
             "description" : "Возвращает элемент, который находится на указанное количество позиций ранее заданного элемента на его уровне.",
             "arguments" : "Member_Expression.Lag(Index)",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%",
             "dontCheckInParser" : "1",
             "name" : "LASTCHILD",
             "description" : "Возвращает последний дочерний элемент указанного элемента.",
             "arguments" : "Member_Expression.LastChild",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%",
             "dontCheckInParser" : "1",
             "name" : "LASTSIBLING",
             "description" : "Возвращает последний дочерний элемент родителя указанного элемента.",
             "arguments" : "Member_Expression.LastSibling",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%(&)",
             "dontCheckInParser" : "1",
             "name" : "LEAD",
             "description" : "Возвращает элемент, который следует за заданным элементом через указанное число позиций на уровне элемента.",
             "arguments" : "Member_Expression.Lead( Index )",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "LINKMEMBER",
             "description" : "Возвращает элемент, эквивалентный заданному элементу в указанной иерархии.",
             "arguments" : "LinkMember(Member_Expression, Hierarchy_Expression)",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : "",
             "dontCheckInParser" : "1",
             "name" : "LOOKUPCUBE",
             "description" : "Возвращает значение многомерных выражений, вычисленное для другого указанного куба в той же базе данных.",
             "arguments" : "LookupCube(Cube_Name, Numeric_Expression ) или LookupCube(Cube_Name, String_Expression ); Cube_Name - Допустимое строковое выражение, обозначающее имя куба.",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%",
             "dontCheckInParser" : "1",
             "name" : "CURRENTMEMBER",
             "description" : "Возвращает текущий элемент уровня, содержащего заданный элемент.",
             "arguments" : "Member_Expression.CurrentMember",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%",
             "dontCheckInParser" : "1",
             "name" : "NEXTMEMBER",
             "description" : "Возвращает следующий элемент уровня, содержащего заданный элемент.",
             "arguments" : "Member_Expression.NextMember",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%",
             "dontCheckInParser" : "1",
             "name" : "PREVMEMBER",
             "description" : "Возвращает предыдущий элемент уровня, содержащего заданный элемент.",
             "arguments" : "Member_Expression.PrevMember",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Навигация",
             "format" : ".%",
             "dontCheckInParser" : "1",
             "name" : "SIBLINGS",
             "description" : "Возвращает элементы, имеющие общего родителя с указанным элементом, включая сам элемент.",
             "arguments" : "Member_Expression.Siblings",
             "showFullDescriptionLink" : "1",
             "userFunction" : "0",
             "calendarFunction" : "0"
            },
            {
             "category" : "Мои функции",
             "format" : "",
             "dontCheckInParser" : "0",
             "name" : "MyFunc1",
             "description" : "MyFunc1",
             "arguments" : "MyFunc1(Input:ITimeSeries, Input1:ITimeSeries, Coef:Double)",
             "showFullDescriptionLink" : "0",
             "userFunction" : "1",
             "calendarFunction" : "0"
            }
          ]
        }
      }
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


    public static GetFormulaEditorInfoResult GetFunctionList(MbId mb)
    {
        var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
        //Параметры выполнения операции
        var tGet = new GetFormulaEditorInfo()
        {
            tArg = new GetFormulaEditorInfoArg()
            {
                pattern = new FormulaEditorInfoPattern()
                {
                    isRExist = true,
                    userRPath = true,
                    formulaEditorFunctions = FormulaEditorFunctionsType.Adomd
                }
            },
            tMb = new MbId() { id = mb.id }
        };
        //Получение списка функций
        var result = somClient.GetFormulaEditorInfo(tGet);
        return result;
    }


См. также:


[Специфические
 операции](Specific_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
