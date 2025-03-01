import styled from 'styled-components'

import { EmptyMessage } from '@/shared/ui/EmptyMessage'

const dummyData = [
  { fontName: '가나다체', createdAt: '2025.03.21', status: '제작 중' },
  { fontName: '가나다체', createdAt: '2025.03.21', status: '제작 중' },
  { fontName: '가나다체', createdAt: '2025.03.21', status: '제작 중' },
  { fontName: '가나다체', createdAt: '2025.03.21', status: '제작 중' },
  { fontName: '가나다체', createdAt: '2025.03.21', status: '제작 중' },
  { fontName: '가나다체', createdAt: '2025.03.21', status: '제작 중' },
]

export const FontProgressTable = () => {
  const progressData = dummyData

  if (!dummyData || !dummyData.length) return <EmptyMessage message="제작한 폰트가 없습니다." />

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>폰트 이름</th>
          <th>제작 일자</th>
          <th>제작 상황</th>
        </tr>
      </thead>
      <tbody>
        {progressData.map(({ fontName, createdAt, status }, index) => (
          <tr key={index}>
            <td>{fontName}</td>
            <td>{createdAt}</td>
            <td>{status}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;

  th,
  td {
    ${({ theme }) => theme.padding('sm')};
    border: 1px solid #ddd;
  }

  th {
    ${({ theme }) => theme.font(800, theme.colors.grey[200])};
    background-color: ${({ theme }) => theme.colors.grey[600]};
  }

  td {
    ${({ theme }) => theme.font(800, theme.colors.grey[600])};
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.grey[200]};
  }

  tr:hover {
    background-color: ${({ theme }) => theme.colors.grey[300]};
  }
`
