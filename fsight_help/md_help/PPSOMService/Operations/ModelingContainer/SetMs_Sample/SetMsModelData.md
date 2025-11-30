# Изменение данных в модели

Изменение данных в модели
-


**


# Изменение данных в модели


Ниже приведен пример использования операции [SetMs](../SetMs.htm)
 для изменения данных в модели. В запросе передаются: экземпляр открытого
 контейнера моделирования, параметры выполнения операции и шаблон изменения
 данных. В результате выполнения операция возвращает рабочую книгу, содержащую
 изменённые данные переменной.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[-](../../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[-](../../../#)
				 <s:Body
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[-](../../../#)
						 <SetMs
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[-](../../../#)
								 <tMs
								 xmlns="">


										  <id>S56!M!S!C1</id>


									  </tMs>


								[-](../../../#)
								 <tArg
								 xmlns="">


										[-](../../../#)
										 <pattern>


												  <obInst>true</obInst>


												[-](../../../#)
												 <item>


														  <key>2803</key>


														[-](../../../#)
														 <problem>


																[-](../../../#)
																 <metamodel>


																		  <visualControllerPattern
																		 />


																	  </metamodel>


															  </problem>


													  </item>


											  </pattern>


										[-](../../../#)
										 <meta>


												[-](../../../#)
												 <item>


														  <k>2803</k>


														  <type>Problem</type>


														[-](../../../#)
														 <problemMd>


																[-](../../../#)
																 <metamodel>


																		[-](../../../#)
																		 <visualController>


																				[-](../../../#)
																				 <chainWorkbookSet>


																						[-](../../../#)
																						 <refresh>


																								  <saveData>true</saveData>


																							  </refresh>


																						[-](../../../#)
																						 <pattern>


																								  <obInst>true</obInst>


																								  <dataEditState>true</dataEditState>


																								[-](../../../#)
																								 <cellsTable>


																										  <cells>true</cells>


																										  <getCellDate>true</getCellDate>


																									  </cellsTable>


																							  </pattern>


																						[-](../../../#)
																						 <meta>


																								[-](../../../#)
																								 <dataEditState>


																										  <readOnly>false</readOnly>


																									  </dataEditState>


																								[-](../../../#)
																								 <cellsTable
																								 rowCount="**2**"
																								 columnCount="**31**">


																										[-](../../../#)
																										 <columns>


																												[-](../../../#)
																												 <dims>


																														[-](../../../#)
																														 <it>


																																  <k>0</k>


																																  <id>calendar</id>


																															  </it>


																													  </dims>


																												[-](../../../#)
																												 <slots>


																														[-](../../../#)
																														 <s
																														 date="**1990-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.1990</k>


																																				  <n>1990A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**1991-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.1991</k>


																																				  <n>1991A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**1992-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.1992</k>


																																				  <n>1992A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**1993-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.1993</k>


																																				  <n>1993A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**1994-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.1994</k>


																																				  <n>1994A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**1995-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.1995</k>


																																				  <n>1995A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**1996-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.1996</k>


																																				  <n>1996A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**1997-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.1997</k>


																																				  <n>1997A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**1998-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.1998</k>


																																				  <n>1998A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**1999-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.1999</k>


																																				  <n>1999A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2000-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2000</k>


																																				  <n>2000A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2001-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2001</k>


																																				  <n>2001A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2002-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2002</k>


																																				  <n>2002A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2003-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2003</k>


																																				  <n>2003A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2004-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2004</k>


																																				  <n>2004A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2005-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2005</k>


																																				  <n>2005A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2006-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2006</k>


																																				  <n>2006A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2007-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2007</k>


																																				  <n>2007A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2008-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2008</k>


																																				  <n>2008A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2009-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2009</k>


																																				  <n>2009A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2010-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2010</k>


																																				  <n>2010A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2011-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2011</k>


																																				  <n>2011A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2012-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2012</k>


																																				  <n>2012A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2013-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2013</k>


																																				  <n>2013A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2014-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2014</k>


																																				  <n>2014A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2015-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2015</k>


																																				  <n>2015A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2016-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2016</k>


																																				  <n>2016A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2017-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2017</k>


																																				  <n>2017A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2018-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2018</k>


																																				  <n>2018A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2019-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2019</k>


																																				  <n>2019A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s
																														 date="**2020-01-01**">


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>YEARS:1.1.2020</k>


																																				  <n>2020A1</n>


																																			  </e>


																																	  </els>


																															  </s>


																													  </slots>


																											  </columns>


																										[-](../../../#)
																										 <rows>


																												[-](../../../#)
																												 <dims>


																														[-](../../../#)
																														 <it>


																																  <k>0</k>


																																  <id>series</id>


																															  </it>


																													  </dims>


																												[-](../../../#)
																												 <slots>


																														[-](../../../#)
																														 <s>


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>MyOutputVavable</k>


																																				  <n>MyOutputVavable</n>


																																			  </e>


																																	  </els>


																															  </s>


																														[-](../../../#)
																														 <s>


																																[-](../../../#)
																																 <els>


																																		[-](../../../#)
																																		 <e>


																																				  <k>MyInputVavable</k>


																																				  <n>MyInputVavable</n>


																																			  </e>


																																	  </els>


																															  </s>


																													  </slots>


																											  </rows>


																										[-](../../../#)
																										 <cells>


																												  <c
																												 v="**7**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**0**"
																												 date="**1990-01-01**"
																												 />


																												  <c
																												 v="**3.000000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**2**"
																												 date="**1992-01-01**"
																												 />


																												  <c
																												 v="**2.000000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**3**"
																												 date="**1993-01-01**"
																												 />


																												  <c
																												 v="**3.800000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**4**"
																												 date="**1994-01-01**"
																												 />


																												  <c
																												 v="**0**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**5**"
																												 date="**1995-01-01**"
																												 />


																												  <c
																												 v="**2.000000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**7**"
																												 date="**1997-01-01**"
																												 />


																												  <c
																												 v="**1.100000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**8**"
																												 date="**1998-01-01**"
																												 />


																												  <c
																												 v="**5.400000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**9**"
																												 date="**1999-01-01**"
																												 />


																												  <c
																												 v="**1.000000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**10**"
																												 date="**2000-01-01**"
																												 />


																												  <c
																												 v="**-1.700000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**11**"
																												 date="**2001-01-01**"
																												 />


																												  <c
																												 v="**7.200000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**12**"
																												 date="**2002-01-01**"
																												 />


																												  <c
																												 v="**-1.000000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**13**"
																												 date="**2003-01-01**"
																												 />


																												  <c
																												 v="**5.000000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**14**"
																												 date="**2004-01-01**"
																												 />


																												  <c
																												 v="**0.200000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**15**"
																												 date="**2005-01-01**"
																												 />


																												  <c
																												 v="**2.208075**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**16**"
																												 date="**2006-01-01**"
																												 />


																												  <c
																												 v="**-0.500000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**17**"
																												 date="**2007-01-01**"
																												 />


																												  <c
																												 v="**3.200000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**18**"
																												 date="**2008-01-01**"
																												 />


																												  <c
																												 v="**2.000000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**19**"
																												 date="**2009-01-01**"
																												 />


																												  <c
																												 v="**3.000000**"
																												 dt="**3**"
																												 row="**0**"
																												 column="**20**"
																												 date="**2010-01-01**"
																												 />


																												  <c
																												 v="**5.700000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**0**"
																												 date="**1990-01-01**"
																												 />


																												  <c
																												 v="**2.600000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**1**"
																												 date="**1991-01-01**"
																												 />


																												  <c
																												 v="**5.300000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**2**"
																												 date="**1992-01-01**"
																												 />


																												  <c
																												 v="**1.600000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**3**"
																												 date="**1993-01-01**"
																												 />


																												  <c
																												 v="**5.000000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**4**"
																												 date="**1994-01-01**"
																												 />


																												  <c
																												 v="**0.200000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**5**"
																												 date="**1995-01-01**"
																												 />


																												  <c
																												 v="**6.600000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**6**"
																												 date="**1996-01-01**"
																												 />


																												  <c
																												 v="**-0.500000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**7**"
																												 date="**1997-01-01**"
																												 />


																												  <c
																												 v="**3.200000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**8**"
																												 date="**1998-01-01**"
																												 />


																												  <c
																												 v="**2.000000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**9**"
																												 date="**1999-01-01**"
																												 />


																												  <c
																												 v="**3.000000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**10**"
																												 date="**2000-01-01**"
																												 />


																												  <c
																												 v="**6.200000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**11**"
																												 date="**2001-01-01**"
																												 />


																												  <c
																												 v="**7.100000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**12**"
																												 date="**2002-01-01**"
																												 />


																												  <c
																												 v="**5.800000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**13**"
																												 date="**2003-01-01**"
																												 />


																												  <c
																												 v="**2.800000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**14**"
																												 date="**2004-01-01**"
																												 />


																												  <c
																												 v="**3.700000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**15**"
																												 date="**2005-01-01**"
																												 />


																												  <c
																												 v="**4.454652**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**16**"
																												 date="**2006-01-01**"
																												 />


																												  <c
																												 v="**3.200000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**17**"
																												 date="**2007-01-01**"
																												 />


																												  <c
																												 v="**3.600000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**18**"
																												 date="**2008-01-01**"
																												 />


																												  <c
																												 v="**8.000000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**19**"
																												 date="**2009-01-01**"
																												 />


																												  <c
																												 v="**7.000000**"
																												 dt="**3**"
																												 row="**1**"
																												 column="**20**"
																												 date="**2010-01-01**"
																												 />


																											  </cells>


																									  </cellsTable>


																							  </meta>


																					  </chainWorkbookSet>


																				[-](../../../#)
																				 <chainWorkbookEaxSet>


																						[-](../../../#)
																						 <pattern>


																								  <obInst>true</obInst>


																							  </pattern>


																						  <meta
																						 />


																					  </chainWorkbookEaxSet>


																			  </visualController>


																	  </metamodel>


															  </problemMd>


													  </item>


											  </meta>


										[-](../../../#)
										 <metaGet>


												  <obInst>true</obInst>


												[-](../../../#)
												 <item>


														  <key>2803</key>


														[-](../../../#)
														 <problem>


																[-](../../../#)
																 <metamodel>


																		[-](../../../#)
																		 <visualControllerPattern>


																				[-](../../../#)
																				 <chainWorkbook>


																						[-](../../../#)
																						 <pattern>


																								  <obInst>true</obInst>


																								[-](../../../#)
																								 <cellsTable>


																										  <headers>true</headers>


																										[-](../../../#)
																										 <slots>


																												  <elementKey>true</elementKey>


																												  <elementName>true</elementName>


																											  </slots>


																										  <cells>true</cells>


																										  <emptyCells>false</emptyCells>


																										  <getCellDate>true</getCellDate>


																									  </cellsTable>


																							  </pattern>


																					  </chainWorkbook>


																				  <chainWorkbookEax
																				 />


																			  </visualControllerPattern>


																	  </metamodel>


															  </problem>


													  </item>


											  </metaGet>


										[-](../../../#)
										 <execParams>


												  <scenarioKeys
												 />


												  <execFillChain>true</execFillChain>


											  </execParams>


									  </tArg>


							  </SetMs>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[-](../../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[-](../../../#)
				 <soapenv:Body>


						[-](../../../#)
						 <SetMsResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


								[-](../../../#)
								 <id
								 xmlns="">


										  <id>S56!M!S!C1</id>


									  </id>


								[-](../../../#)
								 <meta
								 xmlns="">


										[-](../../../#)
										 <obInst>


												[-](../../../#)
												 <obDesc
												 isShortcut="**0**">


														  <i>MODELSPACE</i>


														  <n>Контейнер
														 моделирования</n>


														  <k>1581</k>


														  <c>5121</c>


														  <p>1580</p>


														  <h>0</h>


													  </obDesc>


											  </obInst>


										  <dirty>0</dirty>


										[-](../../../#)
										 <item>


												  <k>2803</k>


												  <id>TEMP_MODEL</id>


												  <n>TEMP_MODEL</n>


												  <vis>1</vis>


												  <type>Problem</type>


												[-](../../../#)
												 <problemMd>


														[-](../../../#)
														 <metamodel>


																  <k>2804</k>


																[-](../../../#)
																 <visualController>


																		[-](../../../#)
																		 <chainWorkbook>


																				[-](../../../#)
																				 <id>


																						  <id>S56!M!S!W7</id>


																					  </id>


																				[-](../../../#)
																				 <meta>


																						[-](../../../#)
																						 <obInst>


																								[-](../../../#)
																								 <obDesc
																								 isShortcut="**0**">


																										  <i>CHAINWB_2804</i>


																										  <n>ChainWorkBook</n>


																										  <k>2837</k>


																										  <c>2827</c>


																										  <p>2804</p>


																										  <h>0</h>


																									  </obDesc>


																							  </obInst>


																						  <dirty>1</dirty>


																						  <windowsPosition>Vertical</windowsPosition>


																						  <hasPivot>0</hasPivot>


																						  <hasLaner>1</hasLaner>


																						[-](../../../#)
																						 <series
																						 count="**2**">


																								  <its
																								 />


																							  </series>


																						[-](../../../#)
																						 <cellsTable
																						 columnCount="**31**"
																						 rowCount="**2**">


																								[-](../../../#)
																								 <columns>


																										[-](../../../#)
																										 <dims>


																												[-](../../../#)
																												 <it>


																														  <k>0</k>


																														  <id>calendar</id>


																													  </it>


																											  </dims>


																										[-](../../../#)
																										 <slots>


																												[-](../../../#)
																												 <s
																												 date="**1990-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.1990</k>


																																		  <n>1990A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**1991-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.1991</k>


																																		  <n>1991A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**1992-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.1992</k>


																																		  <n>1992A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**1993-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.1993</k>


																																		  <n>1993A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**1994-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.1994</k>


																																		  <n>1994A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**1995-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.1995</k>


																																		  <n>1995A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**1996-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.1996</k>


																																		  <n>1996A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**1997-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.1997</k>


																																		  <n>1997A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**1998-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.1998</k>


																																		  <n>1998A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**1999-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.1999</k>


																																		  <n>1999A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2000-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2000</k>


																																		  <n>2000A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2001-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2001</k>


																																		  <n>2001A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2002-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2002</k>


																																		  <n>2002A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2003-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2003</k>


																																		  <n>2003A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2004-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2004</k>


																																		  <n>2004A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2005-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2005</k>


																																		  <n>2005A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2006-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2006</k>


																																		  <n>2006A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2007-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2007</k>


																																		  <n>2007A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2008-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2008</k>


																																		  <n>2008A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2009-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2009</k>


																																		  <n>2009A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2010-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2010</k>


																																		  <n>2010A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2011-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2011</k>


																																		  <n>2011A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2012-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2012</k>


																																		  <n>2012A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2013-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2013</k>


																																		  <n>2013A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2014-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2014</k>


																																		  <n>2014A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2015-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2015</k>


																																		  <n>2015A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2016-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2016</k>


																																		  <n>2016A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2017-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2017</k>


																																		  <n>2017A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2018-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2018</k>


																																		  <n>2018A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2019-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2019</k>


																																		  <n>2019A1</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s
																												 date="**2020-01-01**">


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>YEARS:1.1.2020</k>


																																		  <n>2020A1</n>


																																	  </e>


																															  </els>


																													  </s>


																											  </slots>


																									  </columns>


																								[-](../../../#)
																								 <rows>


																										[-](../../../#)
																										 <dims>


																												[-](../../../#)
																												 <it>


																														  <k>0</k>


																														  <id>series</id>


																													  </it>


																											  </dims>


																										[-](../../../#)
																										 <slots>


																												[-](../../../#)
																												 <s>


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>MyOutputVavable</k>


																																		  <n>MyOutputVavable</n>


																																	  </e>


																															  </els>


																													  </s>


																												[-](../../../#)
																												 <s>


																														[-](../../../#)
																														 <els>


																																[-](../../../#)
																																 <e>


																																		  <k>MyInputVavable</k>


																																		  <n>MyInputVavable</n>


																																	  </e>


																															  </els>


																													  </s>


																											  </slots>


																									  </rows>


																								[-](../../../#)
																								 <cells>


																										  <c
																										 v="**7.000000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**0**"
																										 date="**1990-01-01**"
																										 />


																										  <c
																										 v="**3.000000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**2**"
																										 date="**1992-01-01**"
																										 />


																										  <c
																										 v="**2.000000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**3**"
																										 date="**1993-01-01**"
																										 />


																										  <c
																										 v="**3.800000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**4**"
																										 date="**1994-01-01**"
																										 />


																										  <c
																										 v="**0**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**5**"
																										 date="**1995-01-01**"
																										 />


																										  <c
																										 v="**2.000000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**7**"
																										 date="**1997-01-01**"
																										 />


																										  <c
																										 v="**1.100000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**8**"
																										 date="**1998-01-01**"
																										 />


																										  <c
																										 v="**5.400000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**9**"
																										 date="**1999-01-01**"
																										 />


																										  <c
																										 v="**1.000000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**10**"
																										 date="**2000-01-01**"
																										 />


																										  <c
																										 v="**-1.700000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**11**"
																										 date="**2001-01-01**"
																										 />


																										  <c
																										 v="**7.200000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**12**"
																										 date="**2002-01-01**"
																										 />


																										  <c
																										 v="**-1.000000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**13**"
																										 date="**2003-01-01**"
																										 />


																										  <c
																										 v="**5.000000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**14**"
																										 date="**2004-01-01**"
																										 />


																										  <c
																										 v="**0.200000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**15**"
																										 date="**2005-01-01**"
																										 />


																										  <c
																										 v="**2.208075**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**16**"
																										 date="**2006-01-01**"
																										 />


																										  <c
																										 v="**-0.500000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**17**"
																										 date="**2007-01-01**"
																										 />


																										  <c
																										 v="**3.200000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**18**"
																										 date="**2008-01-01**"
																										 />


																										  <c
																										 v="**2.000000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**19**"
																										 date="**2009-01-01**"
																										 />


																										  <c
																										 v="**3.000000**"
																										 dt="**3**"
																										 row="**0**"
																										 column="**20**"
																										 date="**2010-01-01**"
																										 />


																										  <c
																										 v="**5.700000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**0**"
																										 date="**1990-01-01**"
																										 />


																										  <c
																										 v="**2.600000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**1**"
																										 date="**1991-01-01**"
																										 />


																										  <c
																										 v="**5.300000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**2**"
																										 date="**1992-01-01**"
																										 />


																										  <c
																										 v="**1.600000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**3**"
																										 date="**1993-01-01**"
																										 />


																										  <c
																										 v="**5.000000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**4**"
																										 date="**1994-01-01**"
																										 />


																										  <c
																										 v="**0.200000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**5**"
																										 date="**1995-01-01**"
																										 />


																										  <c
																										 v="**6.600000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**6**"
																										 date="**1996-01-01**"
																										 />


																										  <c
																										 v="**-0.500000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**7**"
																										 date="**1997-01-01**"
																										 />


																										  <c
																										 v="**3.200000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**8**"
																										 date="**1998-01-01**"
																										 />


																										  <c
																										 v="**2.000000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**9**"
																										 date="**1999-01-01**"
																										 />


																										  <c
																										 v="**3.000000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**10**"
																										 date="**2000-01-01**"
																										 />


																										  <c
																										 v="**6.200000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**11**"
																										 date="**2001-01-01**"
																										 />


																										  <c
																										 v="**7.100000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**12**"
																										 date="**2002-01-01**"
																										 />


																										  <c
																										 v="**5.800000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**13**"
																										 date="**2003-01-01**"
																										 />


																										  <c
																										 v="**2.800000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**14**"
																										 date="**2004-01-01**"
																										 />


																										  <c
																										 v="**3.700000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**15**"
																										 date="**2005-01-01**"
																										 />


																										  <c
																										 v="**4.454652**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**16**"
																										 date="**2006-01-01**"
																										 />


																										  <c
																										 v="**3.200000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**17**"
																										 date="**2007-01-01**"
																										 />


																										  <c
																										 v="**3.600000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**18**"
																										 date="**2008-01-01**"
																										 />


																										  <c
																										 v="**8.000000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**19**"
																										 date="**2009-01-01**"
																										 />


																										  <c
																										 v="**7.000000**"
																										 dt="**3**"
																										 row="**1**"
																										 column="**20**"
																										 date="**2010-01-01**"
																										 />


																									  </cells>


																							  </cellsTable>


																					  </meta>


																			  </chainWorkbook>


																		[-](../../../#)
																		 <chainWorkbookEax>


																				[-](../../../#)
																				 <id>


																						  <id
																						 />


																					  </id>


																				[-](../../../#)
																				 <meta>


																						[-](../../../#)
																						 <obInst>


																								[-](../../../#)
																								 <obDesc
																								 isShortcut="**0**">


																										  <i>CHAINWB_2804</i>


																										  <n>ChainWorkBook</n>


																										  <k>2837</k>


																										  <c>2827</c>


																										  <p>2804</p>


																										  <h>0</h>


																									  </obDesc>


																							  </obInst>


																						  <dirty>1</dirty>


																						  <windowsPosition>Vertical</windowsPosition>


																						  <hasPivot>0</hasPivot>


																					  </meta>


																			  </chainWorkbookEax>


																	  </visualController>


															  </metamodel>


													  </problemMd>


											  </item>


									  </meta>


							  </SetMsResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


    {
     "SetMs" :
      {
       "tMs" :
        {

         "id" : "S89!M!S!C1"
        },
       "tArg" :
        {
         "pattern" :
          {
           "obInst" : "true",
           "item" :
            {
             "key" : "2803",

             "problem" :
              {
               "metamodel" :
                {
                 "visualControllerPattern" : ""
                }
              }
            }
          },
         "meta" :

          {
           "item" :
            {
             "k" : "2803",
             "type" : "Problem",
             "problemMd" :
              {
               "metamodel" :
                {
                 "visualController" :

                  {
                   "chainWorkbookSet" :
                    {
                     "refresh" :
                      {
                       "saveData" : "true"
                      },
                     "pattern" :
                      {
                       "obInst" : "true",

                       "dataEditState" : "true",
                       "cellsTable" :
                        {
                         "cells" : "true",
                         "getCellDate" : "true"
                        }
                      },
                     "meta" :
                      {
                       "dataEditState" :

                        {
                         "readOnly" : "false"
                        },
                       "cellsTable" :
                        {
                         "@rowCount" : "2",
                         "@columnCount" : "31",
                         "columns" :
                          {
                           "dims" :

                            {
                             "it" :
                              {
                               "k" : "0",
                               "id" : "calendar"
                              }
                            },
                           "slots" :
                            {
                             "s" :

                              [
                                {
                                 "@date" : "1990-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.1990",
                                     "n" : "1990A1"
                                    }

                                  }
                                },
                                {
                                 "@date" : "1991-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.1991",
                                     "n" : "1991A1"

                                    }
                                  }
                                },
                                {
                                 "@date" : "1992-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.1992",

                                     "n" : "1992A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1993-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {

                                     "k" : "YEARS:1.1.1993",
                                     "n" : "1993A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1994-01-01",
                                 "els" :
                                  {
                                   "e" :

                                    {
                                     "k" : "YEARS:1.1.1994",
                                     "n" : "1994A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1995-01-01",
                                 "els" :
                                  {

                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.1995",
                                     "n" : "1995A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1996-01-01",
                                 "els" :

                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.1996",
                                     "n" : "1996A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "1997-01-01",

                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.1997",
                                     "n" : "1997A1"
                                    }
                                  }
                                },
                                {

                                 "@date" : "1998-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.1998",
                                     "n" : "1998A1"
                                    }
                                  }
                                },

                                {
                                 "@date" : "1999-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.1999",
                                     "n" : "1999A1"
                                    }
                                  }

                                },
                                {
                                 "@date" : "2000-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2000",
                                     "n" : "2000A1"
                                    }

                                  }
                                },
                                {
                                 "@date" : "2001-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2001",
                                     "n" : "2001A1"

                                    }
                                  }
                                },
                                {
                                 "@date" : "2002-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2002",

                                     "n" : "2002A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2003-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {

                                     "k" : "YEARS:1.1.2003",
                                     "n" : "2003A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2004-01-01",
                                 "els" :
                                  {
                                   "e" :

                                    {
                                     "k" : "YEARS:1.1.2004",
                                     "n" : "2004A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2005-01-01",
                                 "els" :
                                  {

                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2005",
                                     "n" : "2005A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2006-01-01",
                                 "els" :

                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2006",
                                     "n" : "2006A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2007-01-01",

                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2007",
                                     "n" : "2007A1"
                                    }
                                  }
                                },
                                {

                                 "@date" : "2008-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2008",
                                     "n" : "2008A1"
                                    }
                                  }
                                },

                                {
                                 "@date" : "2009-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2009",
                                     "n" : "2009A1"
                                    }
                                  }

                                },
                                {
                                 "@date" : "2010-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2010",
                                     "n" : "2010A1"
                                    }

                                  }
                                },
                                {
                                 "@date" : "2011-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2011",
                                     "n" : "2011A1"

                                    }
                                  }
                                },
                                {
                                 "@date" : "2012-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2012",

                                     "n" : "2012A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2013-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {

                                     "k" : "YEARS:1.1.2013",
                                     "n" : "2013A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2014-01-01",
                                 "els" :
                                  {
                                   "e" :

                                    {
                                     "k" : "YEARS:1.1.2014",
                                     "n" : "2014A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2015-01-01",
                                 "els" :
                                  {

                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2015",
                                     "n" : "2015A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2016-01-01",
                                 "els" :

                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2016",
                                     "n" : "2016A1"
                                    }
                                  }
                                },
                                {
                                 "@date" : "2017-01-01",

                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2017",
                                     "n" : "2017A1"
                                    }
                                  }
                                },
                                {

                                 "@date" : "2018-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2018",
                                     "n" : "2018A1"
                                    }
                                  }
                                },

                                {
                                 "@date" : "2019-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2019",
                                     "n" : "2019A1"
                                    }
                                  }

                                },
                                {
                                 "@date" : "2020-01-01",
                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "YEARS:1.1.2020",
                                     "n" : "2020A1"
                                    }

                                  }
                                }
                              ]
                            }
                          },
                         "rows" :
                          {
                           "dims" :
                            {
                             "it" :

                              {
                               "k" : "0",
                               "id" : "series"
                              }
                            },
                           "slots" :
                            {
                             "s" :
                              [
                                {

                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "MyInputVavable",
                                     "n" : "MyInputVavable"
                                    }
                                  }
                                },
                                {

                                 "els" :
                                  {
                                   "e" :
                                    {
                                     "k" : "MyOutputVavable",
                                     "n" : "MyOutputVavable"
                                    }
                                  }
                                }
                              ]

                            }
                          },
                         "cells" :
                          {
                           "c" :
                            [
                              {
                               "@v" : "7",
                               "@dt" : "3",
                               "@row" : "0",

                               "@column" : "0",
                               "@date" : "1990-01-01"
                              },
                              {
                               "@v" : "-1.700000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "1",
                               "@date" : "1991-01-01"
                              },

                              {
                               "@v" : "7.200000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "2",
                               "@date" : "1992-01-01"
                              },
                              {
                               "@v" : "-1.000000",
                               "@dt" : "3",

                               "@row" : "0",
                               "@column" : "3",
                               "@date" : "1993-01-01"
                              },
                              {
                               "@v" : "5.000000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "4",
                               "@date" : "1994-01-01"

                              },
                              {
                               "@v" : "0.200000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "5",
                               "@date" : "1995-01-01"
                              },
                              {
                               "@v" : "6.600000",

                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "6",
                               "@date" : "1996-01-01"
                              },
                              {
                               "@v" : "-0.500000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "7",

                               "@date" : "1997-01-01"
                              },
                              {
                               "@v" : "3.200000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "8",
                               "@date" : "1998-01-01"
                              },
                              {

                               "@v" : "2.000000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "9",
                               "@date" : "1999-01-01"
                              },
                              {
                               "@v" : "3.000000",
                               "@dt" : "3",
                               "@row" : "0",

                               "@column" : "10",
                               "@date" : "2000-01-01"
                              },
                              {
                               "@v" : "6.200000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "11",
                               "@date" : "2001-01-01"
                              },

                              {
                               "@v" : "7.100000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "12",
                               "@date" : "2002-01-01"
                              },
                              {
                               "@v" : "5.800000",
                               "@dt" : "3",

                               "@row" : "0",
                               "@column" : "13",
                               "@date" : "2003-01-01"
                              },
                              {
                               "@v" : "2.800000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "14",
                               "@date" : "2004-01-01"

                              },
                              {
                               "@v" : "3.700000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "15",
                               "@date" : "2005-01-01"
                              },
                              {
                               "@v" : "4.454652",

                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "16",
                               "@date" : "2006-01-01"
                              },
                              {
                               "@v" : "3.200000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "17",

                               "@date" : "2007-01-01"
                              },
                              {
                               "@v" : "3.600000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "18",
                               "@date" : "2008-01-01"
                              },
                              {

                               "@v" : "8.000000",
                               "@dt" : "3",
                               "@row" : "0",
                               "@column" : "19",
                               "@date" : "2009-01-01"
                              },
                              {
                               "@v" : "7.000000",
                               "@dt" : "3",
                               "@row" : "0",

                               "@column" : "20",
                               "@date" : "2010-01-01"
                              },
                              {
                               "@v" : "4.000000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "0",
                               "@date" : "1990-01-01"
                              },

                              {
                               "@v" : "3.000000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "2",
                               "@date" : "1992-01-01"
                              },
                              {
                               "@v" : "2.000000",
                               "@dt" : "3",

                               "@row" : "1",
                               "@column" : "3",
                               "@date" : "1993-01-01"
                              },
                              {
                               "@v" : "3.800000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "4",
                               "@date" : "1994-01-01"

                              },
                              {
                               "@v" : "1.200000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "5",
                               "@date" : "1995-01-01"
                              },
                              {
                               "@v" : "2.000000",

                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "7",
                               "@date" : "1997-01-01"
                              },
                              {
                               "@v" : "1.100000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "8",

                               "@date" : "1998-01-01"
                              },
                              {
                               "@v" : "5.400000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "9",
                               "@date" : "1999-01-01"
                              },
                              {

                               "@v" : "1.000000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "10",
                               "@date" : "2000-01-01"
                              },
                              {
                               "@v" : "-1.700000",
                               "@dt" : "3",
                               "@row" : "1",

                               "@column" : "11",
                               "@date" : "2001-01-01"
                              },
                              {
                               "@v" : "7.200000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "12",
                               "@date" : "2002-01-01"
                              },

                              {
                               "@v" : "-1.000000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "13",
                               "@date" : "2003-01-01"
                              },
                              {
                               "@v" : "5.000000",
                               "@dt" : "3",

                               "@row" : "1",
                               "@column" : "14",
                               "@date" : "2004-01-01"
                              },
                              {
                               "@v" : "0.200000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "15",
                               "@date" : "2005-01-01"

                              },
                              {
                               "@v" : "6.600000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "16",
                               "@date" : "2006-01-01"
                              },
                              {
                               "@v" : "-0.500000",

                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "17",
                               "@date" : "2007-01-01"
                              },
                              {
                               "@v" : "3.200000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "18",

                               "@date" : "2008-01-01"
                              },
                              {
                               "@v" : "2.000000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "19",
                               "@date" : "2009-01-01"
                              },
                              {

                               "@v" : "3.000000",
                               "@dt" : "3",
                               "@row" : "1",
                               "@column" : "20",
                               "@date" : "2010-01-01"
                              }
                            ]
                          }
                        }
                      }

                    },
                   "chainWorkbookEaxSet" :
                    {
                     "pattern" :
                      {
                       "obInst" : "true"
                      },
                     "meta" : ""
                    }
                  }

                }
              }
            }
          },
         "metaGet" :
          {
           "obInst" : "true",
           "item" :
            {
             "key" : "2803",

             "problem" :
              {
               "metamodel" :
                {
                 "visualControllerPattern" :
                  {
                   "chainWorkbook" :
                    {
                     "pattern" :
                      {

                       "obInst" : "true",
                       "cellsTable" :
                        {
                         "headers" : "true",
                         "slots" :
                          {
                           "elementKey" : "true",
                           "elementName" : "true"
                          },
                         "cells" : "true",

                         "emptyCells" : "false",
                         "getCellDate" : "true"
                        }
                      }
                    },
                   "chainWorkbookEax" : ""
                  }
                }
              }
            }

          },
         "execParams" :
          {
           "scenarioKeys" : "",
           "execFillChain" : "true"
          }
        }
      }
    }
  }
}

### JSON-ответ:


    {
     "SetMsResult" :
      {
       "id" :
        {
         "id" : "S89!M!S!C1"
        },
       "meta" :
        {

         "obInst" :
          {
           "obDesc" :
            {
             "@isShortcut" : "0",
             "i" : "MODELSPACE",
             "n" : "Контейнер моделирования",
             "k" : "1581",
             "c" : "5121",
             "p" : "1580",

             "h" : "0"
            }
          },
         "dirty" : "0",
         "item" :
          {
           "k" : "2803",
           "id" : "TEMP_MODEL",
           "n" : "TEMP_MODEL",
           "vis" : "1",

           "type" : "Problem",
           "problemMd" :
            {
             "metamodel" :
              {
               "k" : "2804",
               "visualController" :
                {
                 "chainWorkbook" :
                  {

                   "id" :
                    {
                     "id" : "S89!M!S!W4"
                    },
                   "meta" :
                    {
                     "obInst" :
                      {
                       "obDesc" :
                        {

                         "@isShortcut" : "0",
                         "i" : "CHAINWB_2804",
                         "n" : "ChainWorkBook",
                         "k" : "2837",
                         "c" : "2827",
                         "p" : "2804",
                         "h" : "0"
                        }
                      },
                     "dirty" : "1",

                     "windowsPosition" : "Vertical",
                     "hasPivot" : "0",
                     "hasLaner" : "1",
                     "series" :
                      {
                       "@count" : "2",
                       "its" : ""
                      },
                     "cellsTable" :
                      {

                       "@rowCount" : "2",
                       "@columnCount" : "31",
                       "columns" :
                        {
                         "dims" :
                          {
                           "it" :
                            {
                             "k" : "0",
                             "id" : "calendar"

                            }
                          },
                         "slots" :
                          {
                           "s" :
                            [
                              {
                               "@date" : "1990-01-01",
                               "els" :
                                {

                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.1990",
                                   "n" : "1990A1"
                                  }
                                }
                              },
                              {
                               "@date" : "1991-01-01",
                               "els" :

                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.1991",
                                   "n" : "1991A1"
                                  }
                                }
                              },
                              {
                               "@date" : "1992-01-01",

                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.1992",
                                   "n" : "1992A1"
                                  }
                                }
                              },
                              {

                               "@date" : "1993-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.1993",
                                   "n" : "1993A1"
                                  }
                                }
                              },

                              {
                               "@date" : "1994-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.1994",
                                   "n" : "1994A1"
                                  }
                                }

                              },
                              {
                               "@date" : "1995-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.1995",
                                   "n" : "1995A1"
                                  }

                                }
                              },
                              {
                               "@date" : "1996-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.1996",
                                   "n" : "1996A1"

                                  }
                                }
                              },
                              {
                               "@date" : "1997-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.1997",

                                   "n" : "1997A1"
                                  }
                                }
                              },
                              {
                               "@date" : "1998-01-01",
                               "els" :
                                {
                                 "e" :
                                  {

                                   "k" : "YEARS:1.1.1998",
                                   "n" : "1998A1"
                                  }
                                }
                              },
                              {
                               "@date" : "1999-01-01",
                               "els" :
                                {
                                 "e" :

                                  {
                                   "k" : "YEARS:1.1.1999",
                                   "n" : "1999A1"
                                  }
                                }
                              },
                              {
                               "@date" : "2000-01-01",
                               "els" :
                                {

                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2000",
                                   "n" : "2000A1"
                                  }
                                }
                              },
                              {
                               "@date" : "2001-01-01",
                               "els" :

                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2001",
                                   "n" : "2001A1"
                                  }
                                }
                              },
                              {
                               "@date" : "2002-01-01",

                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2002",
                                   "n" : "2002A1"
                                  }
                                }
                              },
                              {

                               "@date" : "2003-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2003",
                                   "n" : "2003A1"
                                  }
                                }
                              },

                              {
                               "@date" : "2004-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2004",
                                   "n" : "2004A1"
                                  }
                                }

                              },
                              {
                               "@date" : "2005-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2005",
                                   "n" : "2005A1"
                                  }

                                }
                              },
                              {
                               "@date" : "2006-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2006",
                                   "n" : "2006A1"

                                  }
                                }
                              },
                              {
                               "@date" : "2007-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2007",

                                   "n" : "2007A1"
                                  }
                                }
                              },
                              {
                               "@date" : "2008-01-01",
                               "els" :
                                {
                                 "e" :
                                  {

                                   "k" : "YEARS:1.1.2008",
                                   "n" : "2008A1"
                                  }
                                }
                              },
                              {
                               "@date" : "2009-01-01",
                               "els" :
                                {
                                 "e" :

                                  {
                                   "k" : "YEARS:1.1.2009",
                                   "n" : "2009A1"
                                  }
                                }
                              },
                              {
                               "@date" : "2010-01-01",
                               "els" :
                                {

                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2010",
                                   "n" : "2010A1"
                                  }
                                }
                              },
                              {
                               "@date" : "2011-01-01",
                               "els" :

                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2011",
                                   "n" : "2011A1"
                                  }
                                }
                              },
                              {
                               "@date" : "2012-01-01",

                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2012",
                                   "n" : "2012A1"
                                  }
                                }
                              },
                              {

                               "@date" : "2013-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2013",
                                   "n" : "2013A1"
                                  }
                                }
                              },

                              {
                               "@date" : "2014-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2014",
                                   "n" : "2014A1"
                                  }
                                }

                              },
                              {
                               "@date" : "2015-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2015",
                                   "n" : "2015A1"
                                  }

                                }
                              },
                              {
                               "@date" : "2016-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2016",
                                   "n" : "2016A1"

                                  }
                                }
                              },
                              {
                               "@date" : "2017-01-01",
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2017",

                                   "n" : "2017A1"
                                  }
                                }
                              },
                              {
                               "@date" : "2018-01-01",
                               "els" :
                                {
                                 "e" :
                                  {

                                   "k" : "YEARS:1.1.2018",
                                   "n" : "2018A1"
                                  }
                                }
                              },
                              {
                               "@date" : "2019-01-01",
                               "els" :
                                {
                                 "e" :

                                  {
                                   "k" : "YEARS:1.1.2019",
                                   "n" : "2019A1"
                                  }
                                }
                              },
                              {
                               "@date" : "2020-01-01",
                               "els" :
                                {

                                 "e" :
                                  {
                                   "k" : "YEARS:1.1.2020",
                                   "n" : "2020A1"
                                  }
                                }
                              }
                            ]
                          }
                        },

                       "rows" :
                        {
                         "dims" :
                          {
                           "it" :
                            {
                             "k" : "0",
                             "id" : "series"
                            }
                          },

                         "slots" :
                          {
                           "s" :
                            [
                              {
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "MyInputVavable",

                                   "n" : "MyInputVavable"
                                  }
                                }
                              },
                              {
                               "els" :
                                {
                                 "e" :
                                  {
                                   "k" : "MyOutputVavable",

                                   "n" : "MyOutputVavable"
                                  }
                                }
                              }
                            ]
                          }
                        },
                       "cells" :
                        {
                         "c" :

                          [
                            {
                             "@v" : "7.000000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "0",
                             "@date" : "1990-01-01"
                            },
                            {
                             "@v" : "-1.700000",

                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "1",
                             "@date" : "1991-01-01"
                            },
                            {
                             "@v" : "7.200000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "2",

                             "@date" : "1992-01-01"
                            },
                            {
                             "@v" : "-1.000000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "3",
                             "@date" : "1993-01-01"
                            },
                            {

                             "@v" : "5.000000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "4",
                             "@date" : "1994-01-01"
                            },
                            {
                             "@v" : "0.200000",
                             "@dt" : "3",
                             "@row" : "0",

                             "@column" : "5",
                             "@date" : "1995-01-01"
                            },
                            {
                             "@v" : "6.600000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "6",
                             "@date" : "1996-01-01"
                            },

                            {
                             "@v" : "-0.500000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "7",
                             "@date" : "1997-01-01"
                            },
                            {
                             "@v" : "3.200000",
                             "@dt" : "3",

                             "@row" : "0",
                             "@column" : "8",
                             "@date" : "1998-01-01"
                            },
                            {
                             "@v" : "2.000000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "9",
                             "@date" : "1999-01-01"

                            },
                            {
                             "@v" : "3.000000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "10",
                             "@date" : "2000-01-01"
                            },
                            {
                             "@v" : "6.200000",

                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "11",
                             "@date" : "2001-01-01"
                            },
                            {
                             "@v" : "7.100000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "12",

                             "@date" : "2002-01-01"
                            },
                            {
                             "@v" : "5.800000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "13",
                             "@date" : "2003-01-01"
                            },
                            {

                             "@v" : "2.800000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "14",
                             "@date" : "2004-01-01"
                            },
                            {
                             "@v" : "3.700000",
                             "@dt" : "3",
                             "@row" : "0",

                             "@column" : "15",
                             "@date" : "2005-01-01"
                            },
                            {
                             "@v" : "4.454652",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "16",
                             "@date" : "2006-01-01"
                            },

                            {
                             "@v" : "3.200000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "17",
                             "@date" : "2007-01-01"
                            },
                            {
                             "@v" : "3.600000",
                             "@dt" : "3",

                             "@row" : "0",
                             "@column" : "18",
                             "@date" : "2008-01-01"
                            },
                            {
                             "@v" : "8.000000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "19",
                             "@date" : "2009-01-01"

                            },
                            {
                             "@v" : "7.000000",
                             "@dt" : "3",
                             "@row" : "0",
                             "@column" : "20",
                             "@date" : "2010-01-01"
                            },
                            {
                             "@v" : "4.000000",

                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "0",
                             "@date" : "1990-01-01"
                            },
                            {
                             "@v" : "3.000000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "2",

                             "@date" : "1992-01-01"
                            },
                            {
                             "@v" : "2.000000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "3",
                             "@date" : "1993-01-01"
                            },
                            {

                             "@v" : "3.800000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "4",
                             "@date" : "1994-01-01"
                            },
                            {
                             "@v" : "1.200000",
                             "@dt" : "3",
                             "@row" : "1",

                             "@column" : "5",
                             "@date" : "1995-01-01"
                            },
                            {
                             "@v" : "2.000000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "7",
                             "@date" : "1997-01-01"
                            },

                            {
                             "@v" : "1.100000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "8",
                             "@date" : "1998-01-01"
                            },
                            {
                             "@v" : "5.400000",
                             "@dt" : "3",

                             "@row" : "1",
                             "@column" : "9",
                             "@date" : "1999-01-01"
                            },
                            {
                             "@v" : "1.000000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "10",
                             "@date" : "2000-01-01"

                            },
                            {
                             "@v" : "-1.700000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "11",
                             "@date" : "2001-01-01"
                            },
                            {
                             "@v" : "7.200000",

                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "12",
                             "@date" : "2002-01-01"
                            },
                            {
                             "@v" : "-1.000000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "13",

                             "@date" : "2003-01-01"
                            },
                            {
                             "@v" : "5.000000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "14",
                             "@date" : "2004-01-01"
                            },
                            {

                             "@v" : "0.200000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "15",
                             "@date" : "2005-01-01"
                            },
                            {
                             "@v" : "6.600000",
                             "@dt" : "3",
                             "@row" : "1",

                             "@column" : "16",
                             "@date" : "2006-01-01"
                            },
                            {
                             "@v" : "-0.500000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "17",
                             "@date" : "2007-01-01"
                            },

                            {
                             "@v" : "3.200000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "18",
                             "@date" : "2008-01-01"
                            },
                            {
                             "@v" : "2.000000",
                             "@dt" : "3",

                             "@row" : "1",
                             "@column" : "19",
                             "@date" : "2009-01-01"
                            },
                            {
                             "@v" : "3.000000",
                             "@dt" : "3",
                             "@row" : "1",
                             "@column" : "20",
                             "@date" : "2010-01-01"

                            }
                          ]
                        }
                      }
                    }
                  },
                 "chainWorkbookEax" :
                  {
                   "id" :
                    {

                     "id" : ""
                    },
                   "meta" :
                    {
                     "obInst" :
                      {
                       "obDesc" :
                        {
                         "@isShortcut" : "0",
                         "i" : "CHAINWB_2804",

                         "n" : "ChainWorkBook",
                         "k" : "2837",
                         "c" : "2827",
                         "p" : "2804",
                         "h" : "0"
                        }
                      },
                     "dirty" : "1",
                     "windowsPosition" : "Vertical",
                     "hasPivot" : "0"

                    }
                  }
                }
              }
            }
          }
        }


public static GetWbkMdResult SetMsModelData(MsId ms, ulong modelKey, WbkCellsTable data)
{
    var setMsOp = new SetMs();
    setMsOp.tMs = ms;
    setMsOp.tArg = new SetMsArg()

    {  // Задаем шаблон изменения данных
        pattern = new MsMdPattern()
        {
            item = new MsItemPattern()
            {  // Указываем ключ модели
                key = modelKey,
                problem = new MsProblemPattern()
                {
                    metamodel = new MsMetaModelPattern()
                    {   // Задаём шаблон для визуального построения метамодели

                        visualControllerPattern = new MsMetaModelVisualControllerPattern() { }
                    }
                }
            }
        },// Задаём шаблон извлечения измененных данных
        metaGet = new MsMdPattern()
        {
            item = new MsItemPattern()
            {  // Указываем ключ модели
                key = modelKey,

                problem = new MsProblemPattern()
                {
                    metamodel = new MsMetaModelPattern()
                    {   // Задаём шаблон для визуального построения метамодели
                        visualControllerPattern = new MsMetaModelVisualControllerPattern()
                        {   // Задаём шаблон извлечения внутренней рабочей книги
                            chainWorkbook = new GetWbkMdArg()
                            {
                                pattern = new WbkMdPattern()
                                {

                                    cellsTable = new WbkCellsTablePattern()
                                    {
                                        headers = true,
                                        slots = new PvtSlotPattern() { elementKey = true, elementName = true },
                                        cells = true,
                                        emptyCells = false
                                    }
                                }
                            },// Задаём шаблон извлечения внутреннего экспресс-представления
                            chainWorkbookEax = new GetEaxMdArg() { }

                        }
                    }
                }
            }
        },// Задаём изменяемые данные
        meta = new MsMd()
        {
            item = new MsItem()
            {  // Указываем ключ модели
                k = modelKey,

                type = MsItemType.Problem,
                problemMd = new MsProblem()
                {
                    metamodel = new MsMetaModel()
                    {
                        visualController = new MsMetaModelVisualController()
                        {   // Задаём шаблон изменения данных во внутренней рабочей книге
                            chainWorkbookSet = new SetWbkMdArg()
                            {
                                pattern = new WbkMdPattern()

                                {
                                    dataEditState = true,
                                    cellsTable = new WbkCellsTablePattern() { cells = true }
                                },
                                refresh = new EaxRefresh() { saveData = true },
                                meta = new WbkMd()
                                {
                                    dataEditState = new EaxDataEditState() { readOnly = false },
                                    cellsTable = data
                                }

                            },// Внутреннее экспресс-представление не изменяем
                            chainWorkbookEaxSet = new SetEaxMdArg()
                            {
                                pattern = new EaxMdPattern() { },
                                meta = new EaxMd() { }
                            }
                        }
                    }
                }
            }

        },
        // Задаём параметры выполнения операции
        execParams = new MsMdExecParams()
        {
            scenarioKeys = new long[] { },
           // slice = slice,
            execFillChain = true
        }
    };
    // Создаем прокси-объект для выполнения операции

    var somClient = new SomPortTypeClient();
    // Открываем переменную
    SetMsResult setMsResult = somClient.SetMs(setMsOp);
    // Выводим изменённые данные переменной
    MsMetaModelVisualController metaVC = setMsResult.meta.item.problemMd.metamodel.visualController;
    WbkCellsTable table = metaVC.chainWorkbook.meta.cellsTable;
    int ar = table.cells.Length;
    Console.WriteLine("Дата - Значение");
    ulong row = 0; ulong rowAft = 2; int nowRow = 0;
    for (int i = 0; i


См. также:


[SetMs: Операция](../SetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
